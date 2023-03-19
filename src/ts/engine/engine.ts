import * as glMatrix from "gl-matrix";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { CellsBufferData, CellsBufferDescriptor, GridData, Indexing, NonEmptyCellsBuffers } from "./indexing/indexing";
import { FillableMesh } from "./initial-conditions/fillable-mesh";
import * as InitialPositions from "./initial-conditions/initial-positions";
import { Mesh } from "./initial-conditions/models/mesh";
import { Acceleration } from "./simulation/acceleration";
import { Initialization } from "./simulation/initialization";
import { Integration } from "./simulation/integration";

type Data = {
    particlesContainerMesh: Mesh;
    obstaclesMesh: Mesh | null;
    spheresRadius: number;
};

type SpheresBufferDescriptor = {
    readonly positionAttribute: WebGPU.Types.VertexAttribute;
    readonly weightAttribute: WebGPU.Types.VertexAttribute;
    readonly bufferArrayStride: number;
};

type SpheresBuffer = {
    readonly gpuBuffer: GPUBuffer;
    readonly instancesCount: number;
    readonly sphereRadius: number;
};

type ParticlesBufferData = {
    readonly particlesBuffer: WebGPU.Buffer;
    readonly particlesStructType: WebGPU.Types.StructType;
    readonly particlesCount: number;
};

type ResetResult = {
    particlesBuffer: WebGPU.Buffer;
    particlesCount: number;

    particlesPositions: glMatrix.vec3[];
    obstaclesPositions: glMatrix.vec3[];

    cellSize: number;
    gridSize: glMatrix.ReadonlyVec3;
};

class Engine {
    private static readonly particleStructType = new WebGPU.Types.StructType("Particle", [
        { name: "position", type: WebGPU.Types.vec3F32 },
        { name: "weight", type: WebGPU.Types.f32 },
        { name: "velocity", type: WebGPU.Types.vec3F32 },
        { name: "acceleration", type: WebGPU.Types.vec3F32 },
        { name: "indexInCell", type: WebGPU.Types.u32 },
    ]);
    public static readonly spheresBufferDescriptor: SpheresBufferDescriptor = {
        positionAttribute: Engine.particleStructType.asVertexAttribute("position"),
        weightAttribute: Engine.particleStructType.asVertexAttribute("weight"),
        bufferArrayStride: Engine.particleStructType.size,
    };

    private readonly device: GPUDevice;

    private particlesBuffer: WebGPU.Buffer;
    private particlesCount: number;

    private spheresRadius: number;
    private cellSize: number;
    private gridSize: glMatrix.ReadonlyVec3;

    private readonly initialization: Initialization;
    private needsInitialization: boolean;

    private readonly acceleration: Acceleration;
    private readonly integration: Integration;

    private readonly indexing: Indexing;
    private needsIndexing: boolean;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        const resetResult = this.applyReset(data);
        this.particlesBuffer = resetResult.particlesBuffer;
        this.particlesCount = resetResult.particlesCount;
        this.spheresRadius = data.spheresRadius;
        this.cellSize = resetResult.cellSize;
        this.gridSize = resetResult.gridSize;

        const particlesBufferData: ParticlesBufferData = {
            particlesBuffer: this.particlesBuffer,
            particlesCount: this.particlesCount,
            particlesStructType: Engine.particleStructType,
        };

        this.initialization = new Initialization(this.device, {
            particlesPositions: resetResult.particlesPositions,
            obstaclesPositions: resetResult.obstaclesPositions,
            particlesBufferData,
        });

        this.indexing = new Indexing(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData,
        });

        this.acceleration = new Acceleration(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            cellsBufferData: this.indexing.cellsBufferData,
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.integration = new Integration(this.device, {
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });

        this.needsInitialization = true;
        this.needsIndexing = true;
    }

    public compute(commandEncoder: GPUCommandEncoder, dt: number): void {
        if (this.needsInitialization) {
            this.initialization.compute(commandEncoder);
            this.needsInitialization = false;
            this.needsIndexing = true;
        }

        this.indexIfNeeded(commandEncoder);

        if (dt > 0) {
            this.acceleration.compute(commandEncoder, dt);
            this.integration.compute(commandEncoder, dt);
            this.needsIndexing = true;

            this.indexIfNeeded(commandEncoder);
        }
    }

    public reinitialize(): void {
        this.needsInitialization = true;
    }

    public reset(data: Data): void {
        this.particlesBuffer.free();

        const resetResult = this.applyReset(data);
        this.particlesBuffer = resetResult.particlesBuffer;
        this.particlesCount = resetResult.particlesCount;
        this.spheresRadius = data.spheresRadius;
        this.cellSize = resetResult.cellSize;
        this.gridSize = resetResult.gridSize;

        const particlesBufferData: ParticlesBufferData = {
            particlesBuffer: this.particlesBuffer,
            particlesCount: this.particlesCount,
            particlesStructType: Engine.particleStructType,
        };

        this.initialization.reset({
            particlesPositions: resetResult.particlesPositions,
            obstaclesPositions: resetResult.obstaclesPositions,
            particlesBufferData,
        });

        this.indexing.reset({
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData,
        });

        this.acceleration.reset({
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            cellsBufferData: this.indexing.cellsBufferData,
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.integration.reset({
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });

        this.needsInitialization = true;
        this.needsIndexing = true;
    }

    private applyReset(data: Data): ResetResult {
        const particlesFillableMesh = new FillableMesh(data.particlesContainerMesh.triangles);
        const particlesPositions = InitialPositions.fillMesh(data.spheresRadius, particlesFillableMesh);

        let obstaclesPositions: glMatrix.vec3[] = [];
        if (data.obstaclesMesh) {
            const obstaclesFillableMesh = new FillableMesh(data.obstaclesMesh.triangles);
            obstaclesPositions = InitialPositions.fillMesh(data.spheresRadius, obstaclesFillableMesh);
        }

        const particlesCount = particlesPositions.length + obstaclesPositions.length;
        const particlesBuffer = new WebGPU.Buffer(this.device, {
            size: Engine.particleStructType.size * particlesCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });

        const cellSize = Math.max(0.01, 2.05 * data.spheresRadius);
        const gridSize: glMatrix.vec3 = [Math.ceil(1 / cellSize), Math.ceil(1 / cellSize), Math.ceil(1 / cellSize)];

        return { particlesBuffer, particlesCount, particlesPositions, obstaclesPositions, cellSize, gridSize };
    }

    public static getMaxWeight(includeObstacles: boolean): number {
        if (includeObstacles) {
            return Initialization.PARTICLE_WEIGHT_OBSTACLE + 1000;
        }
        return Initialization.PARTICLE_WEIGHT_THRESHOLD;
    }

    public static get cellBufferDescriptor(): CellsBufferDescriptor {
        return Indexing.cellsBufferDescriptor;
    }
    public get cellsBufferData(): CellsBufferData {
        return this.indexing.cellsBufferData;
    }
    public get nonEmptyCellsBuffers(): NonEmptyCellsBuffers {
        return this.indexing.nonEmptyCellsBuffers;
    }
    public get gridData(): GridData {
        return this.indexing.gridData;
    }

    public get spheresBuffer(): SpheresBuffer {
        return {
            gpuBuffer: this.particlesBuffer.gpuBuffer,
            instancesCount: this.particlesCount,
            sphereRadius: this.spheresRadius,
        };
    }

    private indexIfNeeded(commandEncoder: GPUCommandEncoder): void {
        if (this.needsIndexing) {
            this.indexing.compute(commandEncoder);
            this.needsIndexing = false;
        }
    }
}

export type {
    ParticlesBufferData,
    CellsBufferData,
    CellsBufferDescriptor,
    GridData,
    NonEmptyCellsBuffers,
    SpheresBuffer,
    SpheresBufferDescriptor,
};
export {
    Engine,
};


import * as glMatrix from "gl-matrix";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { CellsBufferData, CellsBufferDescriptor, GridData, Indexing, NonEmptyCellsBuffers } from "./indexing/indexing";
import { FillableMesh } from "./initial-conditions/fillable-mesh";
import * as InitialPositions from "./initial-conditions/initial-positions";
import { Mesh } from "./initial-conditions/models/mesh";
import * as Models from "./initial-conditions/models/models";
import { Acceleration } from "./simulation/acceleration";
import { Initialization } from "./simulation/initialization";
import { Integration } from "./simulation/integration";

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

class Engine {
    private readonly device: GPUDevice;

    public readonly particlesInitialMesh: Mesh;
    public readonly obstaclesMesh: Mesh;

    private readonly particles: ParticlesBufferData;
    private readonly spheresRadius: number = 0.005;

    private readonly cellSize: number = Math.max(0.01, 2 * this.spheresRadius);
    private readonly gridSize: glMatrix.ReadonlyVec3 = [Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize)];

    private readonly initialization: Initialization;
    private needsInitialization: boolean = true;

    private readonly acceleration: Acceleration;
    private readonly integration: Integration;

    private readonly indexing: Indexing;
    private needsIndexing: boolean = true;

    public readonly spheresBufferDescriptor: SpheresBufferDescriptor;
    public readonly spheresBuffer: SpheresBuffer;

    public constructor(device: GPUDevice) {
        this.device = device;

        this.particlesInitialMesh = Mesh.load(Models.Shapes);
        const particlesFillableMesh = new FillableMesh(this.particlesInitialMesh.triangles);
        const particlesPositions = InitialPositions.fillMesh(this.spheresRadius, particlesFillableMesh);

        this.obstaclesMesh = Mesh.load(Models.Lighthouse2);
        const obstaclesFillableMesh = new FillableMesh(this.obstaclesMesh.triangles);
        const obstaclesPositions = InitialPositions.fillMesh(this.spheresRadius, obstaclesFillableMesh);

        const particlesCount = particlesPositions.length + obstaclesPositions.length;
        const particlesStructType = new WebGPU.Types.StructType("Particle", [
            { name: "position", type: WebGPU.Types.vec3F32 },
            { name: "weight", type: WebGPU.Types.f32 },
            { name: "velocity", type: WebGPU.Types.vec3F32 },
            { name: "acceleration", type: WebGPU.Types.vec3F32 },
            { name: "indexInCell", type: WebGPU.Types.u32 },
        ]);
        const particlesBuffer = new WebGPU.Buffer(this.device, {
            size: particlesStructType.size * particlesCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });

        this.particles = {
            particlesCount,
            particlesStructType,
            particlesBuffer,
        };

        this.initialization = new Initialization(this.device, {
            particlesPositions,
            obstaclesPositions,
            particlesBufferData: this.particles,
        });

        this.indexing = new Indexing(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData: this.particles,
        });

        this.acceleration = new Acceleration(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            cellsBufferData: this.indexing.cellsBufferData,
            particlesBufferData: this.particles,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.integration = new Integration(this.device, {
            particlesBufferData: this.particles,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });

        this.spheresBufferDescriptor = {
            positionAttribute: this.particles.particlesStructType.asVertexAttribute("position"),
            weightAttribute: this.particles.particlesStructType.asVertexAttribute("weight"),
            bufferArrayStride: this.particles.particlesStructType.size,
        };
        this.spheresBuffer = {
            gpuBuffer: this.particles.particlesBuffer.gpuBuffer,
            instancesCount: this.particles.particlesCount,
            sphereRadius: this.spheresRadius,
        };
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

    public reset(): void {
        this.needsInitialization = true;
    }

    public static getMaxWeight(includeObstacles: boolean): number {
        if (includeObstacles) {
            return Initialization.PARTICLE_WEIGHT_OBSTACLE + 1000;
        }
        return Initialization.PARTICLE_WEIGHT_THRESHOLD;
    }

    public get cellBufferDescriptor(): CellsBufferDescriptor {
        return this.indexing.cellsBufferDescriptor;
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


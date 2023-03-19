import * as glMatrix from "gl-matrix";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { Indexing, type CellsDebugData } from "./indexing/indexing";
import { FillableMesh } from "./initial-conditions/fillable-mesh";
import * as InitialPositions from "./initial-conditions/initial-positions";
import { Mesh } from "./initial-conditions/models/mesh";
import * as Models from "./initial-conditions/models/models";
import { Acceleration } from "./simulation/acceleration";
import { Initialization } from "./simulation/initialization";
import { Integration } from "./simulation/integration";

type SpheresData = {
    readonly radius: number;
    readonly count: number;
    readonly buffer: GPUBuffer;
    readonly positionAttribute: WebGPU.Types.VertexAttribute;
};

type CellsData = {
    readonly cellSize: number;
    readonly gridSize: glMatrix.ReadonlyVec3;
    readonly cellsIndicesBuffer: GPUBuffer;
    readonly cellsIndirectDrawBuffer: GPUBuffer;
}

type ParticlesBufferData = {
    readonly particlesBuffer: WebGPU.Buffer;
    readonly particlesStructType: WebGPU.Types.StructType;
    readonly particlesCount: number;
};

class Engine {
    private readonly device: GPUDevice;

    public readonly mesh: Mesh;

    private readonly particles: ParticlesBufferData;
    private readonly spheresRadius: number = 0.02;

    private readonly cellSize: number = Math.max(0.02, 2.1 * this.spheresRadius);
    private readonly gridSize: glMatrix.ReadonlyVec3 = [Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize)];
    private readonly drawableCellsIndicesBuffer: WebGPU.Buffer;
    private readonly cellsIndirectDrawBuffer: WebGPU.Buffer;

    private readonly initialization: Initialization;
    private needsInitialization: boolean = true;

    private readonly acceleration: Acceleration;
    private readonly integration: Integration;

    private readonly indexing: Indexing;
    private needsIndexing: boolean = true;

    public constructor(device: GPUDevice) {
        this.device = device;

        this.mesh = Mesh.load(Models.Shapes);

        const fillableMesh = new FillableMesh(this.mesh.triangles);
        const positions = InitialPositions.fillMesh(this.spheresRadius, fillableMesh);
        // positions.push(...positions.map(v => {
        //     return [v[0] + 0.1, v[1] + 0.1, v[2] + 0.1] as glMatrix.vec3;
        // }));
        // positions.push(...positions.map(v => {
        //     return [v[0] + 0.07, v[1] + 0.07, v[2] + 0.07] as glMatrix.vec3;
        // }));
        // positions.push(...positions.map(v => {
        //     return [v[0] + 0.04, v[1] + 0.04, v[2] + 0.04] as glMatrix.vec3;
        // }));
        // positions.push(...positions.map(v => {
        //     return [v[0] + 0.06, v[1] + 0.06, v[2] + 0.06] as glMatrix.vec3;
        // }));

        this.drawableCellsIndicesBuffer = new WebGPU.Buffer(this.device, {
            size: Uint32Array.BYTES_PER_ELEMENT * this.gridSize[0] * this.gridSize[1] * this.gridSize[2],
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        this.cellsIndirectDrawBuffer = new WebGPU.Buffer(this.device, {
            size: WebGPU.Types.indirectDrawBufferType.size,
            usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.STORAGE,
        });
        WebGPU.Types.indirectDrawBufferType.setValue(this.cellsIndirectDrawBuffer.getMappedRange(), 0, {
            vertexCount: 24,
            instancesCount: 0, // will be dynamically computed on GPU
            firstVertex: 0,    // will be dynamically computed on GPU
            firstInstance: 0,  // will be dynamically computed on GPU
        });
        this.cellsIndirectDrawBuffer.unmap();

        const particlesCount = positions.length;
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
            initialPositions: positions,
            particlesBufferData: this.particles,
        });

        this.indexing = new Indexing(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData: this.particles,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
            drawableCellsIndicesBuffer: this.drawableCellsIndicesBuffer,
        });

        this.acceleration = new Acceleration(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            cellsBufferData: this.indexing.cellsBufferData,
            particlesBufferData: this.particles,
            particleRadius: this.spheresRadius,
        });
        this.integration = new Integration(this.device, {
            particlesBufferData: this.particles,
            particleRadius: this.spheresRadius,
        });
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

    private indexIfNeeded(commandEncoder: GPUCommandEncoder): void {
        if (this.needsIndexing) {
            this.indexing.compute(commandEncoder);
            this.needsIndexing = false;
        }
    }

    public get spheresData(): SpheresData {
        return {
            radius: this.spheresRadius,
            count: this.particles.particlesCount,
            buffer: this.particles.particlesBuffer.gpuBuffer,
            positionAttribute: this.particles.particlesStructType.asVertexAttribute("position"),
        };
    }

    public get gridCellsData(): CellsData {
        return {
            cellSize: this.cellSize,
            gridSize: this.gridSize,
            cellsIndicesBuffer: this.drawableCellsIndicesBuffer.gpuBuffer,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer.gpuBuffer,
        };
    }
    public get gridCellsDebugData(): CellsDebugData {
        return this.indexing.gridCellsDebugData;
    }
}

export type {
    CellsData,
    ParticlesBufferData,
    SpheresData,
};
export {
    Engine,
};


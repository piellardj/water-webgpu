import * as glMatrix from "gl-matrix";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { FillableMesh } from "./fillable-mesh";
import { Indexing, type CellsDebugData } from "./indexing/indexing";
import * as InitialPositions from "./initial-positions";
import { Mesh } from "./models/mesh";
import * as Models from "./models/models";

type SpheresData = {
    readonly radius: number;
    readonly count: number;
    readonly buffer: GPUBuffer;
    readonly arrayStride: number;
    readonly positionAttributeOffset: number;
    readonly positionAttributeFormat: GPUVertexFormat;
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

    private readonly cellSize: number = 0.05;
    private readonly gridSize: glMatrix.ReadonlyVec3 = [Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize)];
    private readonly drawableCellsIndicesBuffer: WebGPU.Buffer;
    private readonly cellsIndirectDrawBuffer: WebGPU.Buffer;

    private readonly indexing: Indexing;

    public constructor(device: GPUDevice) {
        this.device = device;

        this.mesh = Mesh.load(Models.Shapes);

        const fillableMesh = new FillableMesh(this.mesh.triangles);
        const positions = InitialPositions.fillMesh(this.spheresRadius, fillableMesh);

        this.drawableCellsIndicesBuffer = new WebGPU.Buffer(this.device, {
            size: Uint32Array.BYTES_PER_ELEMENT * this.gridSize[0] * this.gridSize[1] * this.gridSize[2],
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        this.cellsIndirectDrawBuffer = new WebGPU.Buffer(this.device, {
            size: WebGPU.Types.indirectDrawBufferType.size,
            usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.STORAGE,
        });
        new Uint32Array(this.cellsIndirectDrawBuffer.getMappedRange()).set([24, 0, 0, 0]);
        this.cellsIndirectDrawBuffer.unmap();

        const particlesCount = positions.length;
        const particlesStructType = new WebGPU.Types.StructType("Particle", [
            { name: "position", type: WebGPU.Types.vec3F32 },
            { name: "indexInCell", type: WebGPU.Types.u32 },
        ]);
        const particlesBuffer = new WebGPU.Buffer(this.device, {
            size: particlesStructType.size * particlesCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        const positionsData = new Float32Array(particlesBuffer.getMappedRange());
        positions.forEach((position: glMatrix.vec3, index: number) => {
            const data = [position[0], position[1], position[2], 0];
            const offset = 4 * index;
            positionsData.set(data, offset);
        });
        particlesBuffer.unmap();
        this.particles = {
            particlesCount,
            particlesStructType,
            particlesBuffer,
        };

        this.indexing = new Indexing(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData: this.particles,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
            drawableCellsIndicesBuffer: this.drawableCellsIndicesBuffer,
        });
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        this.indexing.compute(commandEncoder);
    }

    public get spheresData(): SpheresData {
        return {
            radius: this.spheresRadius,
            count: this.particles.particlesCount,
            buffer: this.particles.particlesBuffer.gpuBuffer,
            arrayStride: this.particles.particlesStructType.size,
            positionAttributeOffset: this.particles.particlesStructType.getAttributeOffset("position"),
            positionAttributeFormat: "float32x3",
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


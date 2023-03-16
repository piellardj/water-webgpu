import * as glMatrix from "gl-matrix";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { FillableMesh } from "./fillable-mesh";
import { Indexing, type CellsDebugData } from "./indexing/indexing";
import * as InitialPositions from "./initial-positions";
import { Mesh } from "./models/mesh";
import * as Models from "./models/models";

type SpheresData = {
    radius: number;
    count: number;
    buffer: GPUBuffer;
};

type CellsData = {
    readonly cellSize: number;
    readonly gridSize: glMatrix.ReadonlyVec3;
    readonly cellsIndicesBuffer: GPUBuffer;
    readonly cellsIndirectDrawBuffer: GPUBuffer;
}

class Engine {
    private readonly device: GPUDevice;

    public readonly mesh: Mesh;

    private readonly particlesBuffer: WebGPU.Buffer;
    private readonly particlesCount: number;
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
        this.particlesCount = positions.length;

        this.drawableCellsIndicesBuffer = new WebGPU.Buffer(this.device, {
            size: Uint32Array.BYTES_PER_ELEMENT * this.gridSize[0] * this.gridSize[1] * this.gridSize[2],
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        this.cellsIndirectDrawBuffer = new WebGPU.Buffer(this.device, {
            size: Uint32Array.BYTES_PER_ELEMENT * 4,
            usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.STORAGE,
        });
        {
            const cellsIndices: number[] = [];
            for (const position of positions) {
                const naiveCell: glMatrix.ReadonlyVec3 = [
                    Math.floor(position[0] / this.cellSize),
                    Math.floor(position[1] / this.cellSize),
                    Math.floor(position[2] / this.cellSize),
                ];
                const cell: glMatrix.ReadonlyVec3 = [
                    Math.max(0, Math.min(naiveCell[0], this.gridSize[0] - 1)),
                    Math.max(0, Math.min(naiveCell[1], this.gridSize[1] - 1)),
                    Math.max(0, Math.min(naiveCell[2], this.gridSize[2] - 1)),
                ];
                const cellIndex = cell[0] + this.gridSize[0] * (cell[1] + this.gridSize[1] * cell[2]);

                if (!cellsIndices.includes(cellIndex)) {
                    cellsIndices.push(cellIndex);
                }
            }
            new Uint32Array(this.cellsIndirectDrawBuffer.getMappedRange()).set([24, cellsIndices.length, 0, 0]);
            new Uint32Array(this.drawableCellsIndicesBuffer.getMappedRange()).set(cellsIndices);
        }
        this.cellsIndirectDrawBuffer.unmap();
        this.drawableCellsIndicesBuffer.unmap();

        this.particlesBuffer = new WebGPU.Buffer(this.device, {
            size: 4 * Float32Array.BYTES_PER_ELEMENT * this.particlesCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        const positionsData = new Float32Array(this.particlesBuffer.getMappedRange());
        positions.forEach((position: glMatrix.vec3, index: number) => {
            const data = [position[0], position[1], position[2], 0];
            const offset = 4 * index;
            positionsData.set(data, offset);
        });
        this.particlesBuffer.unmap();

        this.indexing = new Indexing(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBuffer: this.particlesBuffer,
            particlesCount: this.particlesCount,
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
            count: this.particlesCount,
            buffer: this.particlesBuffer.gpuBuffer,
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
    SpheresData,
};
export {
    Engine,
};


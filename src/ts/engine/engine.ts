import * as glMatrix from "gl-matrix";
import { FillableMesh } from "./fillable-mesh";
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

    private readonly positionsBuffer: GPUBuffer;
    private readonly spheresCount: number;
    private readonly spheresRadius: number = 0.02;

    private readonly cellSize: number = 0.05;
    private readonly gridSize: glMatrix.ReadonlyVec3 = [Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize)];
    private readonly cellsIndicesBuffer: GPUBuffer;
    private readonly cellsIndirectDrawBuffer: GPUBuffer;

    public constructor(device: GPUDevice) {
        this.device = device;

        this.mesh = Mesh.load(Models.Shapes);

        const fillableMesh = new FillableMesh(this.mesh.triangles);
        const positions = InitialPositions.fillMesh(this.spheresRadius, fillableMesh);
        this.spheresCount = positions.length;

        this.cellsIndicesBuffer = this.device.createBuffer({
            size: Uint32Array.BYTES_PER_ELEMENT * this.gridSize[0] * this.gridSize[1] * this.gridSize[2],
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        this.cellsIndirectDrawBuffer = this.device.createBuffer({
            size: Uint32Array.BYTES_PER_ELEMENT * 4,
            usage: GPUBufferUsage.INDIRECT,
            mappedAtCreation: true,
        });
        {
            const cellsIndices: number[] = [];
            for (const position of positions) {
                const naiveCell = [
                    Math.floor(position[0] / this.cellSize),
                    Math.floor(position[1] / this.cellSize),
                    Math.floor(position[2] / this.cellSize),
                ];
                const cell: glMatrix.vec3 = [
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
            new Uint32Array(this.cellsIndicesBuffer.getMappedRange()).set(cellsIndices);
        }
        this.cellsIndirectDrawBuffer.unmap();
        this.cellsIndicesBuffer.unmap();

        this.positionsBuffer = this.device.createBuffer({
            size: 4 * Float32Array.BYTES_PER_ELEMENT * this.spheresCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        const positionsData = new Float32Array(this.positionsBuffer.getMappedRange());
        positions.forEach((position: glMatrix.vec3, index: number) => {
            const data = [position[0], position[1], position[2], 0];
            const offset = 4 * index;
            positionsData.set(data, offset);
        });
        this.positionsBuffer.unmap();
    }

    public get spheresData(): SpheresData {
        return {
            radius: this.spheresRadius,
            count: this.spheresCount,
            buffer: this.positionsBuffer,
        };
    }

    public get gridCellsData(): CellsData {
        return {
            cellSize: this.cellSize,
            gridSize: this.gridSize,
            cellsIndicesBuffer: this.cellsIndicesBuffer,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
        };
    }
}

export type {
    CellsData,
    SpheresData,
};
export {
    Engine,
};


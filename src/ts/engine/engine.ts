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

class Engine {
    private readonly device: GPUDevice;

    public readonly mesh: Mesh;

    private readonly positionsBuffer: GPUBuffer;
    private readonly spheresCount: number;
    private readonly spheresRadius: number = 0.02;

    public readonly cellSize: number = 0.05;
    public readonly gridSize: [number, number, number] = [Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize), Math.ceil(1 / this.cellSize)];
    public readonly cellsIndicesBuffer: GPUBuffer;
    public readonly cellsCount: number;

    public constructor(device: GPUDevice) {
        this.device = device;

        this.mesh = Mesh.load(Models.Shapes);

        const fillableMesh = new FillableMesh(this.mesh.triangles);
        const positions = InitialPositions.fillMesh(this.spheresRadius, fillableMesh);
        this.spheresCount = positions.length;

        this.cellsIndicesBuffer = this.device.createBuffer({
            size: Uint32Array.BYTES_PER_ELEMENT * this.gridSize[0] * this.gridSize[1] * this.gridSize[2],
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        })
        {
            const cells: glMatrix.vec3[] = [];
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
                let isKnownCell = false;
                for (const knownCell of cells) {
                    if (knownCell[0] === cell[0] && knownCell[1] === cell[1] && knownCell[2] === cell[2]) {
                        isKnownCell = true;
                        break;
                    }
                }
                if (!isKnownCell) {
                    cells.push(cell);
                }
            }
            this.cellsCount = cells.length;
            const cellsIndices = cells.map(cell => cell[0] + this.gridSize[0] * (cell[1] + this.gridSize[1] * cell[2]));
            new Uint32Array(this.cellsIndicesBuffer.getMappedRange()).set(cellsIndices);
        }
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
}

export type {
    SpheresData,
};
export {
    Engine,
};


import * as glMatrix from "gl-matrix";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { CountParticlesPerCell } from "./count-particles-per-cell";
import { ResetCells } from "./reset-cells";

type Data = {
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;
    cellsCount: number;
    particlesBuffer: WebGPU.Buffer;
    particlesCount: number;
};

type CellsDebugData = {
    cellsBuffer: WebGPU.Buffer;
    cellsCount: number;
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;
};

class Indexing {
    private readonly device: GPUDevice;

    private readonly cellsBuffer: WebGPU.Buffer;
    private readonly cellsCount: number;
    private readonly gridSize: glMatrix.ReadonlyVec3;
    private readonly cellSize: number;

    private readonly resetCells: ResetCells;
    private readonly countParticlesPerCell: CountParticlesPerCell;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.cellsCount = data.cellsCount;
        this.gridSize = data.gridSize;
        this.cellSize = data.cellSize;

        this.cellsBuffer = new WebGPU.Buffer(this.device, {
            size: (2 * Uint32Array.BYTES_PER_ELEMENT) * data.cellsCount,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX,
        });

        this.resetCells = new ResetCells(this.device, {
            cellsBuffer: this.cellsBuffer,
            cellsCount: data.cellsCount,
        });

        this.countParticlesPerCell = new CountParticlesPerCell(this.device, {
            cellsBuffer: this.cellsBuffer,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBuffer: data.particlesBuffer,
            particlesCount: data.particlesCount,
        });
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        this.resetCells.compute(commandEncoder);
        this.countParticlesPerCell.compute(commandEncoder);
    }

    public get gridCellsDebugData(): CellsDebugData {
        return {
            cellsBuffer: this.cellsBuffer,
            cellsCount: this.cellsCount,
            gridSize: this.gridSize,
            cellSize: this.cellSize,
        };
    }
}

export type {
    CellsDebugData,
};
export {
    Indexing,
};


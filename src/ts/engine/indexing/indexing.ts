import * as glMatrix from "gl-matrix";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { CountParticlesPerCell } from "./count-particles-per-cell";
import { FinalizePrefixSum } from "./finalize-prefix-sum";
import { PrefixSum } from "./prefix-sum";
import { PreparePrefixSum } from "./prepare-prefix-sum";
import { ResetCells } from "./reset-cells";

type Data = {
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;

    particlesBuffer: WebGPU.Buffer;
    particlesCount: number;

    cellsIndirectDrawBuffer: WebGPU.Buffer,
    drawableCellsIndicesBuffer: WebGPU.Buffer,
};

type CellsDebugData = {
    cellsBuffer: WebGPU.Buffer;
    cellsCount: number;
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;
};

class Indexing {
    private readonly cellsBuffer: WebGPU.Buffer;
    private readonly cellsCount: number;
    private readonly gridSize: glMatrix.ReadonlyVec3;
    private readonly cellSize: number;

    private readonly resetCells: ResetCells;
    private readonly countParticlesPerCell: CountParticlesPerCell;
    private readonly preparePrefixSum: PreparePrefixSum;
    private readonly prefixSum: PrefixSum;
    private readonly finalizePrefixSum: FinalizePrefixSum;

    public constructor(device: GPUDevice, data: Data) {
        this.cellsCount = data.gridSize[0] * data.gridSize[1] * data.gridSize[2];
        this.gridSize = data.gridSize;
        this.cellSize = data.cellSize;

        this.cellsBuffer = new WebGPU.Buffer(device, {
            size: (2 * Uint32Array.BYTES_PER_ELEMENT) * this.cellsCount,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX,
        });

        this.resetCells = new ResetCells(device, {
            cellsBuffer: this.cellsBuffer,
            cellsCount: this.cellsCount,
        });

        this.countParticlesPerCell = new CountParticlesPerCell(device, {
            cellsBuffer: this.cellsBuffer,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBuffer: data.particlesBuffer,
            particlesCount: data.particlesCount,
        });

        this.preparePrefixSum = new PreparePrefixSum(device, {
            cellsBuffer: this.cellsBuffer,
            cellsCount: this.cellsCount,
        });

        this.prefixSum = new PrefixSum(device, {
            itemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            itemsCount: this.cellsCount,
            type: WebGPU.Types.vec2U32,
        });

        this.finalizePrefixSum = new FinalizePrefixSum(device, {
            dataItemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            cellsBuffer: this.cellsBuffer,
            cellsCount: this.cellsCount,
            cellsIndirectDrawBuffer: data.cellsIndirectDrawBuffer,
            drawableCellsIndicesBuffer: data.drawableCellsIndicesBuffer,
        });
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        this.resetCells.compute(commandEncoder);
        this.countParticlesPerCell.compute(commandEncoder);

        this.preparePrefixSum.compute(commandEncoder);
        this.prefixSum.compute(commandEncoder);
        this.finalizePrefixSum.compute(commandEncoder);
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


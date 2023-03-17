import * as glMatrix from "gl-matrix";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ParticlesBufferData } from "../engine";
import { CountParticlesPerCell } from "./count-particles-per-cell";
import { FinalizePrefixSum } from "./finalize-prefix-sum";
import { PrefixSum } from "./prefix-sum";
import { PreparePrefixSum } from "./prepare-prefix-sum";
import { ResetCells } from "./reset-cells";

type Data = {
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;

    particlesBufferData: ParticlesBufferData

    cellsIndirectDrawBuffer: WebGPU.Buffer,
    drawableCellsIndicesBuffer: WebGPU.Buffer,
};

type CellsDebugData = {
    readonly cellsBuffer: WebGPU.Buffer;
    readonly cellsCount: number;
    readonly arrayStride: number;
    readonly particlesCountAttributeOffset: number;
    readonly particlesCountAttributeFormat: GPUVertexFormat;
    readonly gridSize: glMatrix.ReadonlyVec3;
    readonly cellSize: number;
};

type CellsBufferData = {
    readonly cellsBufferBindingResource: GPUBindingResource;
    readonly cellStructType: WebGPU.Types.StructType;
    readonly cellsCount: number;
};

class Indexing {
    private readonly cellsCount: number;
    private readonly gridSize: glMatrix.ReadonlyVec3;
    private readonly cellSize: number;

    private readonly cellStructType: WebGPU.Types.StructType;
    private readonly cellsBuffer: WebGPU.Buffer;

    private readonly resetCells: ResetCells;
    private readonly countParticlesPerCell: CountParticlesPerCell;
    private readonly preparePrefixSum: PreparePrefixSum;
    private readonly prefixSum: PrefixSum;
    private readonly finalizePrefixSum: FinalizePrefixSum;

    public constructor(device: GPUDevice, data: Data) {
        this.cellsCount = data.gridSize[0] * data.gridSize[1] * data.gridSize[2];
        this.gridSize = data.gridSize;
        this.cellSize = data.cellSize;

        this.cellStructType = new WebGPU.Types.StructType("Cell", [
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "offset", type: WebGPU.Types.u32 },
        ]);

        this.cellsBuffer = new WebGPU.Buffer(device, {
            size:  this.cellStructType.size * this.cellsCount,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX,
        });

        const cellsBufferData = {
            cellsBufferBindingResource: this.cellsBuffer.bindingResource,
            cellStructType:  this.cellStructType,
            cellsCount: this.cellsCount,
        };

        this.resetCells = new ResetCells(device, {
            cellsBufferData,
        });

        this.countParticlesPerCell = new CountParticlesPerCell(device, {
            cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBufferData: data.particlesBufferData,
        });

        this.preparePrefixSum = new PreparePrefixSum(device, {
            cellsBufferData,
        });

        this.prefixSum = new PrefixSum(device, {
            itemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            itemsCount: this.cellsCount,
            type: WebGPU.Types.vec2U32,
        });

        this.finalizePrefixSum = new FinalizePrefixSum(device, {
            dataItemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            cellsBufferData,
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
            arrayStride: this.cellStructType.size,
            particlesCountAttributeOffset: this.cellStructType.getAttributeOffset("particlesCount"),
            particlesCountAttributeFormat: "uint32",
            gridSize: this.gridSize,
            cellSize: this.cellSize,
        };
    }
}

export type {
    CellsBufferData,
    CellsDebugData,
};
export {
    Indexing,
};


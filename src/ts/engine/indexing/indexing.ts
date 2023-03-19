import * as glMatrix from "gl-matrix";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ParticlesBufferData } from "../engine";
import { CountParticlesPerCell } from "./count-particles-per-cell";
import { FinalizePrefixSum } from "./finalize-prefix-sum";
import { PrefixSum } from "./prefix-sum";
import { PreparePrefixSum } from "./prepare-prefix-sum";
import { ReorderParticles } from "./reorder-particles";
import { ResetCells } from "./reset-cells";

type Data = {
    readonly gridSize: glMatrix.ReadonlyVec3;
    readonly cellSize: number;

    readonly particlesBufferData: ParticlesBufferData
};

type CellsBufferDescriptor = {
    readonly particlesCountAttribute: WebGPU.Types.VertexAttribute;
    readonly bufferArrayStride: number;
};

type CellsBufferData = {
    readonly gpuBuffer: GPUBuffer;
    readonly cellsBufferBindingResource: GPUBindingResource;
    readonly cellStructType: WebGPU.Types.StructType;
    readonly cellsCount: number;
};

type NonEmptyCellsBuffers = {
    readonly nonEmptyCellsIndicesBuffer: GPUBuffer;
    readonly cellsIndirectDrawBuffer: GPUBuffer;
}

type GridData = {
    readonly gridSize: glMatrix.ReadonlyVec3;
    readonly cellSize: number;
}

class Indexing {
    private static readonly cellStructType = new WebGPU.Types.StructType("Cell", [
        { name: "particlesCount", type: WebGPU.Types.u32 },
        { name: "offset", type: WebGPU.Types.u32 },
    ]);
    public static readonly cellsBufferDescriptor: CellsBufferDescriptor = {
        particlesCountAttribute: Indexing.cellStructType.asVertexAttribute("particlesCount"),
        bufferArrayStride: Indexing.cellStructType.size,
    };

    private readonly cellsCount: number;

    private readonly cellsBuffer: WebGPU.Buffer;

    private readonly nonEmptyCellsIndicesBuffer: WebGPU.Buffer;
    private readonly cellsIndirectDrawBuffer: WebGPU.Buffer;

    private readonly resetCells: ResetCells;
    private readonly countParticlesPerCell: CountParticlesPerCell;
    private readonly preparePrefixSum: PreparePrefixSum;
    private readonly prefixSum: PrefixSum;
    private readonly finalizePrefixSum: FinalizePrefixSum;
    private readonly reorderParticles: ReorderParticles;

    public readonly cellsBufferData: CellsBufferData;

    public readonly nonEmptyCellsBuffers: NonEmptyCellsBuffers;
    public readonly gridData: GridData;

    public constructor(device: GPUDevice, data: Data) {
        this.cellsCount = data.gridSize[0] * data.gridSize[1] * data.gridSize[2];

        this.cellsBuffer = new WebGPU.Buffer(device, {
            size: Indexing.cellStructType.size * this.cellsCount,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX,
        });

        this.nonEmptyCellsIndicesBuffer = new WebGPU.Buffer(device, {
            size: Uint32Array.BYTES_PER_ELEMENT * this.cellsCount,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });

        this.cellsIndirectDrawBuffer = new WebGPU.Buffer(device, {
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

        this.cellsBufferData = {
            gpuBuffer: this.cellsBuffer.gpuBuffer,
            cellsBufferBindingResource: this.cellsBuffer.bindingResource,
            cellStructType: Indexing.cellStructType,
            cellsCount: this.cellsCount,
        };

        this.resetCells = new ResetCells(device, {
            cellsBufferData: this.cellsBufferData,
        });

        this.countParticlesPerCell = new CountParticlesPerCell(device, {
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBufferData: data.particlesBufferData,
        });

        this.preparePrefixSum = new PreparePrefixSum(device, {
            cellsBufferData: this.cellsBufferData,
        });

        this.prefixSum = new PrefixSum(device, {
            itemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            itemsCount: this.cellsCount,
            type: WebGPU.Types.vec2U32,
        });

        this.finalizePrefixSum = new FinalizePrefixSum(device, {
            dataItemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            cellsBufferData: this.cellsBufferData,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer,
        });

        this.reorderParticles = new ReorderParticles(device, {
            particlesBufferData: data.particlesBufferData,
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        });

        this.nonEmptyCellsBuffers = {
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer.gpuBuffer,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer.gpuBuffer,
        };
        this.gridData = {
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        };
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        this.resetCells.compute(commandEncoder);
        this.countParticlesPerCell.compute(commandEncoder);

        this.preparePrefixSum.compute(commandEncoder);
        this.prefixSum.compute(commandEncoder);
        this.finalizePrefixSum.compute(commandEncoder);

        this.reorderParticles.compute(commandEncoder);
    }
}

export type {
    CellsBufferData,
    CellsBufferDescriptor,
    GridData,
    NonEmptyCellsBuffers,
};
export {
    Indexing,
};


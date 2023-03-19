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
    readonly cellsBuffer: WebGPU.Buffer;
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

type ResetResult = {
    cellsCount: number;
    cellsBuffer: WebGPU.Buffer;
    nonEmptyCellsIndicesBuffer: WebGPU.Buffer;
    gridData: GridData;
};

class Indexing {
    private static readonly cellStructType = new WebGPU.Types.StructType("Cell", [
        { name: "particlesCount", type: WebGPU.Types.u32 },
        { name: "offset", type: WebGPU.Types.u32 },
    ]);
    public static readonly cellsBufferDescriptor: CellsBufferDescriptor = {
        particlesCountAttribute: Indexing.cellStructType.asVertexAttribute("particlesCount"),
        bufferArrayStride: Indexing.cellStructType.size,
    };

    private cellsBuffer: WebGPU.Buffer;
    private nonEmptyCellsIndicesBuffer: WebGPU.Buffer;
    public gridData: GridData;
    private cellsCount: number;

    private readonly device: GPUDevice;

    private readonly cellsIndirectDrawBuffer: WebGPU.Buffer;

    private readonly resetCells: ResetCells;
    private readonly countParticlesPerCell: CountParticlesPerCell;
    private readonly preparePrefixSum: PreparePrefixSum;
    private readonly prefixSum: PrefixSum;
    private readonly finalizePrefixSum: FinalizePrefixSum;
    private readonly reorderParticles: ReorderParticles;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

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

        const resetResult = this.applyReset(data);
        this.cellsCount = resetResult.cellsCount;
        this.cellsBuffer = resetResult.cellsBuffer;
        this.nonEmptyCellsIndicesBuffer = resetResult.nonEmptyCellsIndicesBuffer;
        this.gridData = resetResult.gridData;

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
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        this.resetCells.compute(commandEncoder);
        this.countParticlesPerCell.compute(commandEncoder);

        this.preparePrefixSum.compute(commandEncoder);
        this.prefixSum.compute(commandEncoder);
        this.finalizePrefixSum.compute(commandEncoder);

        this.reorderParticles.compute(commandEncoder);
    }

    public reset(data: Data): void {
        this.cellsBuffer.free();
        this.nonEmptyCellsIndicesBuffer.free();

        const resetResult = this.applyReset(data);
        this.cellsCount = resetResult.cellsCount;
        this.cellsBuffer = resetResult.cellsBuffer;
        this.nonEmptyCellsIndicesBuffer = resetResult.nonEmptyCellsIndicesBuffer;
        this.gridData = resetResult.gridData;

        this.resetCells.reset({
            cellsBufferData: this.cellsBufferData,
        });

        this.countParticlesPerCell.reset({
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBufferData: data.particlesBufferData,
        });

        this.preparePrefixSum.reset({
            cellsBufferData: this.cellsBufferData,
        });

        this.prefixSum.reset({
            itemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            itemsCount: this.cellsCount,
            type: WebGPU.Types.vec2U32,
        });

        this.finalizePrefixSum.reset({
            dataItemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            cellsBufferData: this.cellsBufferData,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer,
        });

        this.reorderParticles.reset({
            particlesBufferData: data.particlesBufferData,
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        });
    }

    private applyReset(data: Data): ResetResult {
        const cellsCount = data.gridSize[0] * data.gridSize[1] * data.gridSize[2];

        const cellsBuffer = new WebGPU.Buffer(this.device, {
            size: Indexing.cellStructType.size * cellsCount,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX,
        });

        const nonEmptyCellsIndicesBuffer = new WebGPU.Buffer(this.device, {
            size: Uint32Array.BYTES_PER_ELEMENT * cellsCount,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });

        const gridData = {
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        };

        return { cellsCount, cellsBuffer, nonEmptyCellsIndicesBuffer, gridData };
    }

    public get nonEmptyCellsBuffers(): NonEmptyCellsBuffers {
        return {
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer.gpuBuffer,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer.gpuBuffer,
        };
    }

    public get cellsBufferData(): CellsBufferData {
        return {
            cellsBuffer: this.cellsBuffer,
            cellStructType: Indexing.cellStructType,
            cellsCount: this.cellsCount,
        };
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


import * as glMatrix from "gl-matrix";
import { type ViewData } from "../../rendering/camera";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { CountParticlesPerCell } from "./count-particles-per-cell";
import { RenderCellsByPopulation } from "./render-cells-by-population";
import { ResetCells } from "./reset-cells";

type Data = {
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;
    cellsCount: number;
    particlesBuffer: WebGPU.Buffer;
    particlesCount: number;
    modelMatrix: glMatrix.ReadonlyMat4;
};

class Indexing {
    private readonly webglCanvas: WebGPU.Canvas;
    private readonly device: GPUDevice;

    private readonly cellsBuffer: WebGPU.Buffer;
    private readonly cellsCount: number;
    private readonly gridSize: glMatrix.ReadonlyVec3;
    private readonly cellSize: number;

    private readonly resetCells: ResetCells;
    private readonly countParticlesPerCell: CountParticlesPerCell;
    private renderCellsByPopulation: RenderCellsByPopulation | null = null;

    private readonly modelMatrix: glMatrix.ReadonlyMat4;

    public constructor(webglCanvas: WebGPU.Canvas, data: Data) {
        this.webglCanvas = webglCanvas;
        this.device = webglCanvas.device;

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

        this.modelMatrix = data.modelMatrix;
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        this.resetCells.compute(commandEncoder);
        this.countParticlesPerCell.compute(commandEncoder);
    }

    public renderCellsDebug(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData): void {
        if (!this.renderCellsByPopulation) {
            this.renderCellsByPopulation = new RenderCellsByPopulation(this.webglCanvas, this.modelMatrix);
        }
        this.renderCellsByPopulation.render(renderpassEncoder, viewData, {
            cellsBuffer: this.cellsBuffer,
            cellsCount: this.cellsCount,
            gridSize: this.gridSize,
            cellSize: this.cellSize,
        });
    }
}

export {
    Indexing,
};


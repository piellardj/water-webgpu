import * as glMatrix from "gl-matrix";
import { Engine } from "./engine/engine";
import { AxesRenderer } from "./rendering/axes-renderer";
import { ViewData } from "./rendering/camera";
import { CubeRenderer } from "./rendering/cube-renderer";
import { GridCellsRenderer } from "./rendering/grid-cells-renderer";
import { MeshRenderer } from "./rendering/mesh-renderer";
import { SpheresRenderer } from "./rendering/spheres/spheres-renderer";
import { Parameters } from "./ui/parameters";
import * as WebGPU from "./webgpu-utils/webgpu-utils";

class Scene {
    private readonly webgpuCanvas: WebGPU.Canvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly engine: Engine;

    private readonly axesRenderer: AxesRenderer;
    private readonly cubeRenderer: CubeRenderer;
    private readonly spheresRenderer: SpheresRenderer;
    private readonly meshRenderer: MeshRenderer;
    private readonly gridCellsRenderer: GridCellsRenderer;

    public constructor(webgpuCanvas: WebGPU.Canvas) {
        this.webgpuCanvas = webgpuCanvas;

        this.engine = new Engine(webgpuCanvas.device);

        this.axesRenderer = new AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new CubeRenderer(webgpuCanvas, this.modelMatrix);
        this.spheresRenderer = new SpheresRenderer(webgpuCanvas, this.modelMatrix);
        this.meshRenderer = new MeshRenderer(webgpuCanvas, this.modelMatrix, this.engine.mesh);
        this.gridCellsRenderer = new GridCellsRenderer(webgpuCanvas, this.modelMatrix);

        glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData): void {
        if (Parameters.showSpheres) {
            this.spheresRenderer.renderDeferred(commandEncoder, viewData, this.engine.spheresData);
        }

        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        if (Parameters.showAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showDomain) {
            this.cubeRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showMesh) {
            this.meshRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showSpheres) {
            this.spheresRenderer.renderComposition(renderpassEncoder, viewData);
        }
        if (Parameters.showGridCells) {
            this.gridCellsRenderer.render(renderpassEncoder, viewData, this.engine.gridCellsData);
        }
        renderpassEncoder.end();
    }

    public setSize(width: number, height: number): boolean {
        return this.spheresRenderer.setSize(width, height);
    }
}

export {
    Scene,
};


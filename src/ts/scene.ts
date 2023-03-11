import * as glMatrix from "gl-matrix";
import { AxesRenderer } from "./rendering/axes-renderer";
import { CubeRenderer } from "./rendering/cube-renderer";
import { SpheresRenderer } from "./rendering/spheres-renderer";
import { type ViewData } from "./rendering/view-data";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";

class Scene {
    private readonly webgpuCanvas: WebGPUCanvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly axesRenderer: AxesRenderer;
    private readonly cubeRenderer: CubeRenderer;
    private readonly spheresRenderer: SpheresRenderer;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;
        this.axesRenderer = new AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new CubeRenderer(webgpuCanvas, this.modelMatrix);
        this.spheresRenderer = new SpheresRenderer(webgpuCanvas, this.modelMatrix);

        glMatrix.mat4.identity(this.modelMatrix);
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData): void {
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        if (Parameters.showAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showDomain) {
            this.cubeRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showSpheres) {
            const radius = 0.1 * Parameters.spheresRadiusFactor;
            this.spheresRenderer.render(renderpassEncoder, viewData, radius);
        }

        renderpassEncoder.end();
    }
}

export {
    Scene,
};


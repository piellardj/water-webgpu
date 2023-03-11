import * as glMatrix from "gl-matrix";
import { Axes } from "./rendering/axes";
import { Cube } from "./rendering/cube";
import { Spheres } from "./rendering/spheres";
import { type ViewData } from "./rendering/view-data";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";

class Scene {
    private readonly webgpuCanvas: WebGPUCanvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly axesRenderer: Axes;
    private readonly cubeRenderer: Cube;
    private readonly spheresRenderer: Spheres;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;
        this.axesRenderer = new Axes(webgpuCanvas);
        this.cubeRenderer = new Cube(webgpuCanvas, this.modelMatrix);
        this.spheresRenderer = new Spheres(webgpuCanvas, this.modelMatrix);

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


import * as glMatrix from "gl-matrix";
import { Axes } from "./rendering/axes";
import { Camera } from "./rendering/camera";
import { Cube } from "./rendering/cube";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";

class Scene {
    private readonly webgpuCanvas: WebGPUCanvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly axes: Axes;
    private readonly cube: Cube;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;
        this.axes = new Axes(webgpuCanvas);
        this.cube = new Cube(webgpuCanvas, this.modelMatrix);

        glMatrix.mat4.identity(this.modelMatrix);
    }

    public render(commandEncoder: GPUCommandEncoder, camera: Camera): void {
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        const vpMatrix = camera.buildVPMatrix(this.webgpuCanvas.aspectRatio);

        if (Parameters.showAxes) {
            this.axes.render(renderpassEncoder, vpMatrix);
        }
        if (Parameters.showDomain) {
            this.cube.render(renderpassEncoder, vpMatrix);
        }

        renderpassEncoder.end();
    }
}

export {
    Scene,
};


import { Axes } from "./rendering/axes";
import { Camera } from "./rendering/camera";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";

class Scene {
    private readonly webgpuCanvas: WebGPUCanvas;
    private axes: Axes;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;
        this.axes = new Axes(webgpuCanvas)
    }

    public render(commandEncoder: GPUCommandEncoder, camera: Camera): void {
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        const vpMatrix = camera.buildVPMatrix(this.webgpuCanvas.aspectRatio);

        if (Parameters.showAxes) {
            this.axes.render(renderpassEncoder, vpMatrix);
        }

        renderpassEncoder.end();
    }
}

export {
    Scene,
};


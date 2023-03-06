import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";

class Renderer {
    private readonly webgpuCanvas: WebGPUCanvas;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;
    }

    public draw(commandEncoder: GPUCommandEncoder): void {
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);
        renderpassEncoder.end();
    }
}

export {
    Renderer,
};


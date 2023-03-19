import { SpheresBufferDescriptor } from "../../engine/engine";
import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";
import { Blur } from "./blur";
import { Composition } from "./composition";
import { Deferred, type RenderData } from "./deferred";

class SpheresRenderer {
    private readonly deferredRenderer: Deferred;
    private readonly blur: Blur;
    private readonly compositionRenderer: Composition;

    public constructor(webgpuCanvas: WebGPU.Canvas, bufferDescriptor: SpheresBufferDescriptor) {
        this.deferredRenderer = new Deferred(webgpuCanvas, bufferDescriptor);
        this.blur = new Blur(webgpuCanvas.device, this.deferredRenderer.texture);
        this.compositionRenderer = new Composition(webgpuCanvas, this.deferredRenderer.texture);
    }

    public renderDeferred(commandEncoder: GPUCommandEncoder, viewData: ViewData, data: RenderData): void {
        this.deferredRenderer.render(commandEncoder, viewData, data);

        if (Parameters.blur) {
            this.blur.compute(commandEncoder);
        }
    }

    public renderComposition(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData): void {
        this.compositionRenderer.render(renderpassEncoder, viewData);
    }

    public setSize(width: number, height: number): boolean {
        if (this.deferredRenderer.setSize(width, height)) {
            this.blur.setDeferredTexture(this.deferredRenderer.texture);
            this.compositionRenderer.setDeferredTexture(this.deferredRenderer.texture);
            return true;
        }
        return false;
    }
}

export {
    SpheresRenderer,
};


import * as glMatrix from "gl-matrix";
import { type SpheresData } from "../../engine/engine";
import { Parameters } from "../../ui/parameters";
import { WebGPUCanvas } from "../../webgpu-utils/webgpu-canvas";
import { type ViewData } from "../camera";
import { Blur } from "./blur";
import { Composition } from "./composition";
import { Deferred } from "./deferred";

class SpheresRenderer {
    private readonly deferredRenderer: Deferred;
    private readonly blur: Blur;
    private readonly compositionRenderer: Composition;

    public constructor(webgpuCanvas: WebGPUCanvas, modelMatrix: glMatrix.ReadonlyMat4) {
        this.deferredRenderer = new Deferred(webgpuCanvas, modelMatrix);
        this.blur = new Blur(webgpuCanvas.device, this.deferredRenderer.texture);
        this.compositionRenderer = new Composition(webgpuCanvas, this.deferredRenderer.texture);
    }

    public renderDeferred(commandEncoder: GPUCommandEncoder, viewData: ViewData, spheresData: SpheresData): void {
        this.deferredRenderer.render(commandEncoder, viewData, spheresData);

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


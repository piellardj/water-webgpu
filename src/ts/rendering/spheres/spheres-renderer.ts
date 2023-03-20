import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";
import { Blur } from "./blur";
import { Composition, type RenderData as CompositionRenderData } from "./composition";
import { Deferred, type Data as DeferredData, type RenderData as DeferredRenderData } from "./deferred";


class SpheresRenderer {
    private readonly deferredRenderer: Deferred;
    private readonly blur: Blur;
    private readonly compositionRenderer: Composition;

    public constructor(webgpuCanvas: WebGPU.Canvas, data: DeferredData) {
        this.deferredRenderer = new Deferred(webgpuCanvas, data);
        this.blur = new Blur(webgpuCanvas.device, this.deferredRenderer.texture);
        this.compositionRenderer = new Composition(webgpuCanvas, this.deferredRenderer.texture);
    }

    public renderDeferred(commandEncoder: GPUCommandEncoder, viewData: ViewData, data: DeferredRenderData): void {
        this.deferredRenderer.render(commandEncoder, viewData, data);

        if (Parameters.blur) {
            this.blur.compute(commandEncoder);
        }
    }

    public renderComposition(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData, renderData: CompositionRenderData): void {
        this.compositionRenderer.render(renderpassEncoder, viewData, renderData);
    }

    public setSize(width: number, height: number): boolean {
        if (this.deferredRenderer.setSize(width, height)) {
            this.blur.setDeferredTexture(this.deferredRenderer.texture);
            this.compositionRenderer.setDeferredTexture(this.deferredRenderer.texture);
            return true;
        }
        return false;
    }

    public setSceneDepthTextureView(sceneDepthTextureView: GPUTextureView): void {
        this.deferredRenderer.setSceneDepthTextureView(sceneDepthTextureView);
    }
}

export {
    SpheresRenderer,
};


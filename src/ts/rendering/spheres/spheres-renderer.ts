import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";
import { Blur } from "./blur";
import { Composition, type RenderData as CompositionRenderData } from "./composition";
import { Deferred, type Data as DeferredData, type RenderData as DeferredRenderData } from "./deferred";

class SpheresRenderer {
    private readonly webgpuCanvas: WebGPU.Canvas;
    private readonly deferredRenderer: Deferred;
    private readonly blur: Blur;
    private readonly compositionRenderer: Composition;

    public constructor(webgpuCanvas: WebGPU.Canvas, data: DeferredData) {
        this.webgpuCanvas = webgpuCanvas;
        this.deferredRenderer = new Deferred(webgpuCanvas, data);

        const texturesData = {
            deferredTexture: this.deferredRenderer.texture,
            foamTexture: this.deferredRenderer.foamTexture,
        };
        this.blur = new Blur(webgpuCanvas.device, texturesData);
        this.compositionRenderer = new Composition(webgpuCanvas, texturesData);
    }

    public renderDeferred(commandEncoder: GPUCommandEncoder, viewData: ViewData, data: DeferredRenderData): void {
        this.deferredRenderer.render(commandEncoder, viewData, data);

        if (Parameters.blur) {
            const screenScale = 0.25 * this.webgpuCanvas.height / 512;
            this.blur.compute(commandEncoder, viewData.relativeDistance * screenScale);
        }
    }

    public renderComposition(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData, renderData: CompositionRenderData): void {
        this.compositionRenderer.render(renderpassEncoder, viewData, renderData);
    }

    public setSize(width: number, height: number): boolean {
        if (this.deferredRenderer.setSize(width, height)) {
            const texturesData = {
                deferredTexture: this.deferredRenderer.texture,
                foamTexture: this.deferredRenderer.foamTexture,
            };

            this.blur.setDeferredTextures(texturesData);
            this.compositionRenderer.setDeferredTexture(texturesData);
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


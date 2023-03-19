import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";

type RenderData = {
    lightDirection: glMatrix.ReadonlyVec3;
}

class Composition {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;

    private readonly linearSampler: GPUSampler;
    private textureBindgroup: GPUBindGroup;

    private readonly uniforms: WebGPU.Uniforms;
    private readonly uniformsBindgroup: GPUBindGroup;

    public constructor(webgpuCanvas: WebGPU.Canvas, deferredTexture: WebGPU.Texture) {
        this.device = webgpuCanvas.device;

        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "cameraRight", type: WebGPU.Types.vec3F32 },
            { name: "displayMode", type: WebGPU.Types.u32 },
            { name: "cameraUp", type: WebGPU.Types.vec3F32 },
            { name: "f0", type: WebGPU.Types.f32 },
            { name: "worldColor", type: WebGPU.Types.vec3F32 },
            { name: "specularity", type: WebGPU.Types.f32 },
            { name: "waterColor", type: WebGPU.Types.vec3F32 },
            { name: "waterOpacity", type: WebGPU.Types.f32 },
            { name: "lightDirection", type: WebGPU.Types.vec3F32 },
        ]);

        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Spheres.Composition,
            structs: [this.uniforms],
        });

        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                    format: webgpuCanvas.textureFormat,
                }],
            },
            primitive: {
                cullMode: "none",
                topology: "triangle-strip",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });

        this.linearSampler = this.device.createSampler({
            magFilter: "linear",
            minFilter: "linear",
        });

        this.textureBindgroup = this.createTextureBindgroup(deferredTexture);

        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(1),
            entries: [
                {
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }
            ]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData, renderData: RenderData): void {
        this.uniforms.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniforms.setValueFromName("displayMode", Parameters.displayMode);
        this.uniforms.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniforms.setValueFromName("f0", Parameters.waterFresnel);
        this.uniforms.setValueFromName("worldColor", Parameters.renderBackgroundColor.slice(0, 3));
        this.uniforms.setValueFromName("specularity", Parameters.waterSpecularity);
        this.uniforms.setValueFromName("waterColor", Parameters.renderWaterColor.slice(0, 3));
        this.uniforms.setValueFromName("waterOpacity", Parameters.renderWaterOpacity);
        this.uniforms.setValueFromName("lightDirection", renderData.lightDirection);
        this.uniforms.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.textureBindgroup);
        renderpassEncoder.setBindGroup(1, this.uniformsBindgroup);
        renderpassEncoder.draw(4);
    }

    public setDeferredTexture(deferredTexture: WebGPU.Texture): void {
        this.textureBindgroup = this.createTextureBindgroup(deferredTexture);
    }

    private createTextureBindgroup(deferredTexture: WebGPU.Texture): GPUBindGroup {
        return this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: this.linearSampler,
            }, {
                binding: 1,
                resource: deferredTexture.getView(),
            }]
        });
    }
}

export type {
    RenderData,
};
export {
    Composition,
};


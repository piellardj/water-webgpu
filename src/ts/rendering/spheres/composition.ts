import * as ShaderSources from "../../shader-sources";
import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";

class Composition {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;

    private readonly linearSampler: GPUSampler;
    private textureBindgroup: GPUBindGroup;

    private readonly uniformsBuffer: WebGPU.Uniforms;
    private readonly uniformsBindgroup: GPUBindGroup;

    public constructor(webgpuCanvas: WebGPU.Canvas, deferredTexture: WebGPU.Texture) {
        this.device = webgpuCanvas.device;

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.Spheres.Composition });

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

        this.uniformsBuffer = new WebGPU.Uniforms(this.device, [
            { name: "cameraRight", type: WebGPU.Types.vec3F32 },
            { name: "displayMode", type: WebGPU.Types.u32 },
            { name: "cameraUp", type: WebGPU.Types.vec3F32 },
            { name: "f0", type: WebGPU.Types.f32 },
            { name: "worldColor", type: WebGPU.Types.vec3F32 },
            { name: "specularity", type: WebGPU.Types.f32 },
            { name: "waterColor", type: WebGPU.Types.vec3F32 },
            { name: "waterOpacity", type: WebGPU.Types.f32 },
        ]);
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(1),
            entries: [
                {
                    binding: 0,
                    resource: this.uniformsBuffer.bindingResource,
                }
            ]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData): void {
        this.uniformsBuffer.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniformsBuffer.setValueFromName("displayMode", Parameters.displayMode);
        this.uniformsBuffer.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniformsBuffer.setValueFromName("f0", Parameters.waterFresnel);
        this.uniformsBuffer.setValueFromName("worldColor", Parameters.backgroundColor.slice(0, 3));
        this.uniformsBuffer.setValueFromName("specularity", Parameters.waterSpecularity);
        this.uniformsBuffer.setValueFromName("waterColor", Parameters.waterColor.slice(0, 3));
        this.uniformsBuffer.setValueFromName("waterOpacity", Parameters.waterOpacity);
        this.uniformsBuffer.uploadToGPU();

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

export {
    Composition,
};


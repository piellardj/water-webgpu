import * as glMatrix from "gl-matrix";
import { SpheresBufferDescriptor } from "../../engine/engine";
import * as ShaderSources from "../../shader-sources";
import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";

type Data = {
    readonly spheresBufferDescriptor: SpheresBufferDescriptor;
    readonly sceneDepthTextureView: GPUTextureView;
};

type RenderPass = {
    readonly colorAttachment: GPURenderPassColorAttachment;
    readonly foamAttachment?: GPURenderPassColorAttachment;
    readonly depthAttachment: GPURenderPassDepthStencilAttachment;
    readonly descriptor: GPURenderPassDescriptor;
    readonly pipeline: GPURenderPipeline;
    readonly uniformsBindgroup: GPUBindGroup;
}

type RenderData = {
    readonly modelMatrix: glMatrix.ReadonlyMat4;
    readonly gpuBuffer: GPUBuffer;
    readonly instancesCount: number;
    readonly sphereRadius: number;
    readonly maxDisplayedWeight: number;
    readonly willUseWaterDepth: boolean;
};

type DeferredDescriptorData = {
    fragmentMain: string;
    bufferDescriptor: SpheresBufferDescriptor;
    writeMask: GPUColorWriteFlags;
    blend?: GPUBlendState;
    foamTexture?: WebGPU.Texture;
};

class Deferred {
    private readonly device: GPUDevice;

    private readonly rgaRenderPass: RenderPass;
    private readonly bRenderPass: RenderPass;

    private readonly uniforms: WebGPU.Uniforms;

    public readonly texture: WebGPU.Texture;
    public readonly foamTexture: WebGPU.Texture;
    private readonly depthTexture: WebGPU.Texture;

    public constructor(webgpuCanvas: WebGPU.Canvas, data: Data) {
        this.device = webgpuCanvas.device;

        this.texture = new WebGPU.Texture(this.device, "rgba8unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
        this.foamTexture = new WebGPU.Texture(this.device, "rgba8unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
        this.depthTexture = new WebGPU.Texture(this.device, "depth16unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING);

        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "vpMatrix", type: WebGPU.Types.mat4x4 },
            { name: "mMatrix", type: WebGPU.Types.mat4x4 },
            { name: "cameraUp", type: WebGPU.Types.vec3F32 },
            { name: "sphereRadius", type: WebGPU.Types.f32 },
            { name: "cameraRight", type: WebGPU.Types.vec3F32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 }
        ]);

        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Spheres.Spheres,
            structs: [this.uniforms],
        });

        // RGA render pass
        {
            const colorAttachment: GPURenderPassColorAttachment = {
                view: this.texture.getView(),
                clearValue: [0, 1, 0, 1],
                loadOp: "clear",
                storeOp: "store",
            };
            const foamAttachment: GPURenderPassColorAttachment = {
                view: this.foamTexture.getView(),
                clearValue: [0, 0, 0, 0],
                loadOp: "clear",
                storeOp: "store",
            };
            const depthAttachment: GPURenderPassDepthStencilAttachment = {
                view: this.depthTexture.getView(),
                depthClearValue: 1,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                stencilReadOnly: true,
            };
            const renderPassDescriptor: GPURenderPassDescriptor = {
                colorAttachments: [colorAttachment, foamAttachment],
                depthStencilAttachment: depthAttachment,
            };
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, {
                fragmentMain: "main_fragment_rga",
                bufferDescriptor: data.spheresBufferDescriptor,
                writeMask: GPUColorWrite.RED | GPUColorWrite.GREEN | GPUColorWrite.ALPHA,
                foamTexture: this.foamTexture,
            });
            pipelineDescriptor.depthStencil = {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: this.depthTexture.format,
            };
            const pipeline = this.device.createRenderPipeline(pipelineDescriptor);
            const uniformsBindgroup = this.device.createBindGroup({
                layout: pipeline.getBindGroupLayout(0),
                entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
            });

            this.rgaRenderPass = {
                colorAttachment,
                foamAttachment,
                depthAttachment,
                descriptor: renderPassDescriptor,
                pipeline,
                uniformsBindgroup,
            };
        }

        // B render pass
        {
            const colorAttachment: GPURenderPassColorAttachment = {
                view: this.texture.getView(),
                loadOp: "load",
                storeOp: "store",
            };
            const depthAttachment: GPURenderPassDepthStencilAttachment = {
                view: data.sceneDepthTextureView,
                depthReadOnly: true,
                stencilReadOnly: true,
            };
            const renderPassDescriptor: GPURenderPassDescriptor = {
                colorAttachments: [colorAttachment],
                depthStencilAttachment: depthAttachment,
            };
            const additiveBlend: GPUBlendState = {
                color: {
                    srcFactor: "one",
                    dstFactor: "one",
                    operation: "add",
                },
                alpha: {
                    srcFactor: "one",
                    dstFactor: "one",
                    operation: "add",
                }
            };
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, {
                fragmentMain: "main_fragment_b",
                bufferDescriptor: data.spheresBufferDescriptor,
                writeMask: GPUColorWrite.BLUE,
                blend: additiveBlend,
            });
            pipelineDescriptor.depthStencil = {
                depthWriteEnabled: false,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            };
            const pipeline = this.device.createRenderPipeline(pipelineDescriptor);
            const uniformsBindgroup = this.device.createBindGroup({
                layout: pipeline.getBindGroupLayout(0),
                entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
            });

            this.bRenderPass = {
                colorAttachment,
                depthAttachment,
                descriptor: renderPassDescriptor,
                pipeline,
                uniformsBindgroup,
            };
        }
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData, data: RenderData): void {
        this.uniforms.setValueFromName("vpMatrix", viewData.vpMatrix);
        this.uniforms.setValueFromName("mMatrix", data.modelMatrix);
        this.uniforms.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniforms.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniforms.setValueFromName("sphereRadius", Parameters.spheresRadiusFactor * data.sphereRadius);
        this.uniforms.setValueFromName("weightThreshold", data.maxDisplayedWeight);
        this.uniforms.uploadToGPU();

        const renderPasses = [this.rgaRenderPass];
        if (data.willUseWaterDepth) {
            renderPasses.push(this.bRenderPass);
        }

        const width = this.texture.getWidth();
        const height = this.texture.getHeight();
        for (const renderPass of renderPasses) {
            const renderpassEncoder = commandEncoder.beginRenderPass(renderPass.descriptor);
            renderpassEncoder.setViewport(0, 0, width, height, 0, 1);
            renderpassEncoder.setScissorRect(0, 0, width, height);
            renderpassEncoder.setPipeline(renderPass.pipeline);
            renderpassEncoder.setVertexBuffer(0, data.gpuBuffer);
            renderpassEncoder.setBindGroup(0, renderPass.uniformsBindgroup);
            renderpassEncoder.draw(6, data.instancesCount);
            renderpassEncoder.end();
        }
    }

    public setSize(width: number, height: number): boolean {
        let somethingChanged = false;

        const renderPasses = [this.rgaRenderPass, this.bRenderPass];

        if (this.texture.setSize(width, height)) {
            for (const renderPass of renderPasses) {
                renderPass.colorAttachment.view = this.texture.getView();
            }
            somethingChanged = true;
        }
        if (this.foamTexture.setSize(width, height)) {
            for (const renderPass of renderPasses) {
                if (renderPass.foamAttachment) {
                    renderPass.foamAttachment.view = this.foamTexture.getView();
                }
            }
            somethingChanged = true;
        }

        if (this.depthTexture.setSize(width, height)) {
            this.rgaRenderPass.depthAttachment.view = this.depthTexture.getView();
            somethingChanged = true;
        }

        return somethingChanged;
    }

    public setSceneDepthTextureView(sceneDepthTextureView: GPUTextureView): void {
        this.bRenderPass.depthAttachment.view = sceneDepthTextureView;
    }

    private createDeferredDescriptor(shaderModule: GPUShaderModule, data: DeferredDescriptorData): GPURenderPipelineDescriptor {
        const targets: GPUColorTargetState[] = [];

        const colorTarget: GPUColorTargetState = {
            format: this.texture.format,
            writeMask: data.writeMask,
        };
        if (data.blend) {
            colorTarget.blend = data.blend;
        }
        targets.push(colorTarget);

        if (data.foamTexture) {
            targets.push({ format: data.foamTexture.format });
        }

        return {
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: [
                    {
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: data.bufferDescriptor.positionAttribute.offset,
                                format: data.bufferDescriptor.positionAttribute.format,
                            },
                            {
                                shaderLocation: 1,
                                offset: data.bufferDescriptor.weightAttribute.offset,
                                format: data.bufferDescriptor.weightAttribute.format,
                            },
                            {
                                shaderLocation: 2,
                                offset: data.bufferDescriptor.foamAttribute.offset,
                                format: data.bufferDescriptor.foamAttribute.format,
                            },
                        ],
                        arrayStride: data.bufferDescriptor.bufferArrayStride,
                        stepMode: "instance",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: data.fragmentMain,
                targets,
            },
            primitive: {
                cullMode: "none",
                topology: "triangle-list",
            },
        };
    }
}

export type {
    Data,
    RenderData,
};
export {
    Deferred,
};


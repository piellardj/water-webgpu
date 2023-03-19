import * as glMatrix from "gl-matrix";
import { SpheresBufferDescriptor } from "../../engine/engine";
import * as ShaderSources from "../../shader-sources";
import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ViewData } from "../camera";

type RenderPass = {
    readonly colorAttachment: GPURenderPassColorAttachment;
    readonly depthAttachment?: GPURenderPassDepthStencilAttachment;
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
};

class Deferred {
    private readonly device: GPUDevice;

    private readonly renderPasses: RenderPass[];

    private readonly uniforms: WebGPU.Uniforms;

    public readonly texture: WebGPU.Texture;
    private readonly depthTexture: WebGPU.Texture;

    public constructor(webgpuCanvas: WebGPU.Canvas, bufferDescriptor: SpheresBufferDescriptor) {
        this.device = webgpuCanvas.device;

        this.texture = new WebGPU.Texture(this.device, "rgba8unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
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

        this.renderPasses = [];

        // RGA render pass
        {
            const colorAttachment: GPURenderPassColorAttachment = {
                view: this.texture.getView(),
                clearValue: [0, 1, 0, 1],
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
                colorAttachments: [colorAttachment],
                depthStencilAttachment: depthAttachment,
            };
            const writeMask = GPUColorWrite.RED | GPUColorWrite.GREEN | GPUColorWrite.ALPHA;
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, "main_fragment_rga", bufferDescriptor, writeMask);
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

            this.renderPasses.push({
                colorAttachment,
                depthAttachment,
                descriptor: renderPassDescriptor,
                pipeline,
                uniformsBindgroup,
            });
        }

        // B render pass
        {
            const colorAttachment: GPURenderPassColorAttachment = {
                view: this.texture.getView(),
                loadOp: "load",
                storeOp: "store",
            };
            const renderPassDescriptor: GPURenderPassDescriptor = {
                colorAttachments: [colorAttachment],
            };
            const writeMask = GPUColorWrite.BLUE;
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
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, "main_fragment_b", bufferDescriptor, writeMask, additiveBlend);
            const pipeline = this.device.createRenderPipeline(pipelineDescriptor);
            const uniformsBindgroup = this.device.createBindGroup({
                layout: pipeline.getBindGroupLayout(0),
                entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
            });

            this.renderPasses.push({
                colorAttachment,
                descriptor: renderPassDescriptor,
                pipeline,
                uniformsBindgroup,
            });
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

        for (const renderPass of this.renderPasses) {
            const renderpassEncoder = commandEncoder.beginRenderPass(renderPass.descriptor);
            renderpassEncoder.setViewport(0, 0, this.texture.getWidth(), this.texture.getHeight(), 0, 1);
            renderpassEncoder.setScissorRect(0, 0, this.texture.getWidth(), this.texture.getHeight());
            renderpassEncoder.setPipeline(renderPass.pipeline);
            renderpassEncoder.setVertexBuffer(0, data.gpuBuffer);
            renderpassEncoder.setBindGroup(0, renderPass.uniformsBindgroup);
            renderpassEncoder.draw(6, data.instancesCount);
            renderpassEncoder.end();
        }
    }

    public setSize(width: number, height: number): boolean {
        let somethingChanged = false;

        if (this.texture.setSize(width, height)) {
            for (const renderPass of this.renderPasses) {
                renderPass.colorAttachment.view = this.texture.getView();
            }
            somethingChanged = true;
        }

        if (this.depthTexture.setSize(width, height)) {
            for (const renderPass of this.renderPasses) {
                if (renderPass.depthAttachment) {
                    renderPass.depthAttachment.view = this.depthTexture.getView();
                }
            }
            somethingChanged = true;
        }

        return somethingChanged;
    }

    private createDeferredDescriptor(shaderModule: GPUShaderModule, fragmentMain: string, bufferDescriptor: SpheresBufferDescriptor, writeMask: GPUColorWriteFlags, blend?: GPUBlendState): GPURenderPipelineDescriptor {
        const colorTarget: GPUColorTargetState = {
            format: this.texture.format,
            writeMask,
        };
        if (blend) {
            colorTarget.blend = blend;
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
                                offset: bufferDescriptor.positionAttribute.offset,
                                format: bufferDescriptor.positionAttribute.format,
                            },
                            {
                                shaderLocation: 1,
                                offset: bufferDescriptor.weightAttribute.offset,
                                format: bufferDescriptor.weightAttribute.format,
                            }
                        ],
                        arrayStride: bufferDescriptor.bufferArrayStride,
                        stepMode: "instance",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: fragmentMain,
                targets: [colorTarget],
            },
            primitive: {
                cullMode: "none",
                topology: "triangle-list",
            },
        };
    }
}

export type {
    RenderData,
};
export {
    Deferred,
};


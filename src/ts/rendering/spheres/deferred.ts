import * as glMatrix from "gl-matrix";
import { type SpheresData } from "../../engine/engine";
import { Parameters } from "../../ui/parameters";
import * as Types from "../../webgpu-utils/host-shareable-types/types";
import * as ShaderSources from "../../webgpu-utils/shader-sources";
import { Texture } from "../../webgpu-utils/texture";
import { UniformsBuffer } from "../../webgpu-utils/uniforms-buffer";
import { WebGPUCanvas } from "../../webgpu-utils/webgpu-canvas";
import { type ViewData } from "../camera";

type RenderPass = {
    readonly colorAttachment: GPURenderPassColorAttachment;
    readonly depthAttachment?: GPURenderPassDepthStencilAttachment;
    readonly descriptor: GPURenderPassDescriptor;
    readonly pipeline: GPURenderPipeline;
    readonly uniformsBindgroup: GPUBindGroup;
}

class Deferred {
    private readonly device: GPUDevice;

    private readonly renderPasses: RenderPass[];

    private readonly uniformsBuffer: UniformsBuffer;

    public readonly texture: Texture;
    private readonly depthTexture: Texture;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPUCanvas, modelMatrix: glMatrix.ReadonlyMat4) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        this.texture = new Texture(this.device, "rgba8unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING);
        this.depthTexture = new Texture(this.device, "depth16unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING);

        this.uniformsBuffer = new UniformsBuffer(this.device, new Types.StructType("Uniforms", [
            { name: "mvp", type: Types.mat4x4 },
            { name: "cameraUp", type: Types.vec3F32 },
            { name: "sphereRadius", type: Types.f32 },
            { name: "cameraRight", type: Types.vec3F32 },
        ]));

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.Spheres.Spheres });

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
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, "main_fragment_rga", writeMask);
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
                    resource: this.uniformsBuffer.bindingResource,
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
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, "main_fragment_b", writeMask, additiveBlend);
            const pipeline = this.device.createRenderPipeline(pipelineDescriptor);
            const uniformsBindgroup = this.device.createBindGroup({
                layout: pipeline.getBindGroupLayout(0),
                entries: [{
                    binding: 0,
                    resource: this.uniformsBuffer.bindingResource,
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

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData, spheresData: SpheresData): void {
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniformsBuffer.setValueFromName("mvp", this.mvpMatrix);
        this.uniformsBuffer.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniformsBuffer.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniformsBuffer.setValueFromName("sphereRadius", Parameters.spheresRadiusFactor * spheresData.radius);
        this.uniformsBuffer.uploadToGPU();

        for (const renderPass of this.renderPasses) {
            const renderpassEncoder = commandEncoder.beginRenderPass(renderPass.descriptor);
            renderpassEncoder.setViewport(0, 0, this.texture.getWidth(), this.texture.getHeight(), 0, 1);
            renderpassEncoder.setScissorRect(0, 0, this.texture.getWidth(), this.texture.getHeight());
            renderpassEncoder.setPipeline(renderPass.pipeline);
            renderpassEncoder.setVertexBuffer(0, spheresData.buffer);
            renderpassEncoder.setBindGroup(0, renderPass.uniformsBindgroup);
            renderpassEncoder.draw(6, spheresData.count);
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

    private createDeferredDescriptor(shaderModule: GPUShaderModule, fragmentMain: string, writeMask: GPUColorWriteFlags, blend?: GPUBlendState): GPURenderPipelineDescriptor {
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
                                offset: 0,
                                format: "float32x3",
                            }
                        ],
                        arrayStride: Float32Array.BYTES_PER_ELEMENT * 4,
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

export {
    Deferred,
};


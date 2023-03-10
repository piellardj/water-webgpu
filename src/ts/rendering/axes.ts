
import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../webgpu-utils/shader-sources";
import { mat4x4, StructType } from "../webgpu-utils/uniform/host-shareable-types/types";
import { UniformsBuffer } from "../webgpu-utils/uniform/uniforms-buffer";
import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";

class Axes {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniformsBuffer: UniformsBuffer;

    private readonly verticesCount: number = 6;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.mat4 = glMatrix.mat4.create();
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();
    public size: number = 1;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.device = webgpuCanvas.device;

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.Axes });

        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: []
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
                topology: "line-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });

        this.uniformsBuffer = new UniformsBuffer(this.device, new StructType("Uniforms", [
            { name: "mvp", type: mat4x4 },
        ]));

        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: this.uniformsBuffer.bindingResource,
            },]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, vpMatrix: glMatrix.ReadonlyMat4): void {
        glMatrix.mat4.fromScaling(this.matrix, [this.size, this.size, this.size]);
        glMatrix.mat4.multiply(this.mvpMatrix, vpMatrix, this.matrix);

        this.uniformsBuffer.setValueFromName("mvp", this.mvpMatrix);
        this.uniformsBuffer.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(this.verticesCount);
    }
}

export {
    Axes,
};


import * as glMatrix from "gl-matrix";

import * as Types from "../webgpu-utils/host-shareable-types/types";
import * as ShaderSources from "../webgpu-utils/shader-sources";
import { UniformsBuffer } from "../webgpu-utils/uniforms-buffer";
import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";

class Cube {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniformsBuffer: UniformsBuffer;

    private readonly verticesCount: number = 24;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPUCanvas, modelMatrix: glMatrix.ReadonlyMat4) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.Cube });

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

        this.uniformsBuffer = new UniformsBuffer(this.device, new Types.StructType("Uniforms", [
            { name: "mvp", type: Types.mat4x4 },
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
        glMatrix.mat4.multiply(this.mvpMatrix, vpMatrix, this.matrix);

        this.uniformsBuffer.setValueFromName("mvp", vpMatrix);
        this.uniformsBuffer.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(this.verticesCount);
    }
}

export {
    Cube,
};


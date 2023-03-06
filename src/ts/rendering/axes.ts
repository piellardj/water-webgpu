
import * as ShaderSources from "../webgpu-utils/shader-sources";
import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";
import * as glMatrix from "gl-matrix";

class Axes {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniformsBuffer: GPUBuffer;

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

        this.uniformsBuffer = this.device.createBuffer({
            size: 64,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        });

        const layout = this.renderPipeline.getBindGroupLayout(0);
        this.uniformsBindgroup = this.device.createBindGroup({
            layout,//: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: { buffer: this.uniformsBuffer }
            },]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, vpMatrix: glMatrix.ReadonlyMat4): void {
        glMatrix.mat4.fromScaling(this.matrix, [this.size, this.size, this.size]);
        glMatrix.mat4.multiply(this.mvpMatrix, vpMatrix, this.matrix);

        const uniformBufferData = new ArrayBuffer(64);
        new Float32Array(uniformBufferData, 0, 16).set(this.mvpMatrix);
        this.device.queue.writeBuffer(this.uniformsBuffer, 0, uniformBufferData);

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(this.verticesCount);
    }
}

export {
    Axes,
};


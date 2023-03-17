
import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../shader-sources";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { type ViewData } from "./camera";

class AxesRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniforms: WebGPU.Uniforms;

    private readonly verticesCount: number = 6;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.mat4 = glMatrix.mat4.create();
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();
    public size: number = 1;

    public constructor(webgpuCanvas: WebGPU.Canvas) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
        ]);

        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Axes,
            structs: [this.uniforms],
        });

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

        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: this.uniforms.bindingResource,
            }]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData): void {
        glMatrix.mat4.fromScaling(this.matrix, [this.size, this.size, this.size]);
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniforms.setValueFromName("mvp", this.mvpMatrix);
        this.uniforms.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(this.verticesCount);
    }
}

export {
    AxesRenderer,
};


import * as glMatrix from "gl-matrix";
import { type SpheresData } from "../engine/engine";
import { Parameters } from "../ui/parameters";

import * as Types from "../webgpu-utils/host-shareable-types/types";
import * as ShaderSources from "../webgpu-utils/shader-sources";
import { UniformsBuffer } from "../webgpu-utils/uniforms-buffer";
import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";
import { type ViewData } from "./camera";

class SpheresRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniformsBuffer: UniformsBuffer;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPUCanvas, modelMatrix: glMatrix.ReadonlyMat4) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.Spheres });

        this.renderPipeline = this.device.createRenderPipeline({
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
                    },
                ],
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
                topology: "triangle-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });

        this.uniformsBuffer = new UniformsBuffer(this.device, new Types.StructType("Uniforms", [
            { name: "mvp", type: Types.mat4x4 },
            { name: "cameraUp", type: Types.vec3F32 },
            { name: "sphereRadius", type: Types.f32 },
            { name: "cameraRight", type: Types.vec3F32 },
        ]));

        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: this.uniformsBuffer.bindingResource,
            }]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData, spheresData: SpheresData): void {
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniformsBuffer.setValueFromName("mvp", this.mvpMatrix);
        this.uniformsBuffer.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniformsBuffer.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniformsBuffer.setValueFromName("sphereRadius", Parameters.spheresRadiusFactor * spheresData.radius);
        this.uniformsBuffer.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setVertexBuffer(0, spheresData.buffer);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(6, spheresData.count);
    }
}

export {
    SpheresRenderer,
};


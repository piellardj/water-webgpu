import * as glMatrix from "gl-matrix";

import { Mesh } from "../engine/models/mesh";
import * as Types from "../webgpu-utils/host-shareable-types/types";
import * as ShaderSources from "../webgpu-utils/shader-sources";
import { StructType, UniformsBuffer } from "../webgpu-utils/uniforms-buffer";
import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";
import { type ViewData } from "./camera";

class MeshRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniformsBuffer: UniformsBuffer;

    private readonly verticesCount: number;
    private readonly buffer: GPUBuffer;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPUCanvas, mesh: Mesh, modelMatrix: glMatrix.ReadonlyMat4) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.Mesh });

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
                            },
                            {
                                shaderLocation: 1,
                                offset: 3 * Float32Array.BYTES_PER_ELEMENT,
                                format: "float32x3",
                            }
                        ],
                        arrayStride: 6 * Float32Array.BYTES_PER_ELEMENT,
                        stepMode: "vertex",
                    }
                ]
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

        this.uniformsBuffer = new UniformsBuffer(this.device, new StructType("Uniforms", [
            { name: "mvp", type: Types.mat4x4 },
            { name: "modelMatrix", type: Types.mat4x4 },
        ]));

        this.verticesCount = 3 * mesh.triangles.length;
        this.buffer = this.device.createBuffer({
            size: 4 * 2 * 3 * 3 * mesh.triangles.length,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        const buffer = new Float32Array(this.buffer.getMappedRange());
        let i = 0;
        for (const triangle of mesh.triangles) {
            buffer[i++] = triangle.p1[0];
            buffer[i++] = triangle.p1[1];
            buffer[i++] = triangle.p1[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
            buffer[i++] = triangle.p2[0];
            buffer[i++] = triangle.p2[1];
            buffer[i++] = triangle.p2[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
            buffer[i++] = triangle.p3[0];
            buffer[i++] = triangle.p3[1];
            buffer[i++] = triangle.p3[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
        }
        this.buffer.unmap();

        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: this.uniformsBuffer.bindingResource,
                },
            ]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData): void {
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniformsBuffer.setValueFromName("mvp", this.mvpMatrix);
        this.uniformsBuffer.setValueFromName("modelMatrix", this.matrix);
        this.uniformsBuffer.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setVertexBuffer(0, this.buffer);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(this.verticesCount);
    }
}

export {
    MeshRenderer,
};

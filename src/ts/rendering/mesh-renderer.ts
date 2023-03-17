import * as glMatrix from "gl-matrix";
import { Mesh } from "../engine/models/mesh";
import * as ShaderSources from "../shader-sources";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { type ViewData } from "./camera";

class MeshRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniforms: WebGPU.Uniforms;

    private readonly verticesCount: number;
    private readonly buffer: WebGPU.Buffer;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPU.Canvas, modelMatrix: glMatrix.ReadonlyMat4, mesh: Mesh) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "modelMatrix", type: WebGPU.Types.mat4x4 },
        ]);

        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Mesh,
            structs: [this.uniforms],
        });

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

        this.verticesCount = 3 * mesh.triangles.length;
        this.buffer = new WebGPU.Buffer(this.device, {
            size: 4 * 2 * 3 * 3 * mesh.triangles.length,
            usage: GPUBufferUsage.VERTEX,
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
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData): void {
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniforms.setValueFromName("mvp", this.mvpMatrix);
        this.uniforms.setValueFromName("modelMatrix", this.matrix);
        this.uniforms.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setVertexBuffer(0, this.buffer.gpuBuffer);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(this.verticesCount);
    }
}

export {
    MeshRenderer,
};


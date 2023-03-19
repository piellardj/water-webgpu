import * as glMatrix from "gl-matrix";
import { Mesh } from "../../engine/initial-conditions/models/mesh";
import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { MeshRenderable } from "./mesh-renderable";

type RenderData = {
    readonly meshes: MeshRenderable[];
    readonly modelMatrix: glMatrix.ReadonlyMat4;
    readonly mvpMatrix: glMatrix.ReadonlyMat4;
};

class MeshRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniforms: WebGPU.Uniforms;

    private readonly uniformsBindgroup: GPUBindGroup;

    public constructor(webgpuCanvas: WebGPU.Canvas) {
        this.device = webgpuCanvas.device;

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

    public createMeshRenderable(mesh: Mesh): MeshRenderable {
        return new MeshRenderable(this.device, mesh);
    }

    public render(renderpassEncoder: GPURenderPassEncoder, renderData: RenderData): void {
        if (renderData.meshes.length === 0) {
            return;
        }

        renderpassEncoder.setPipeline(this.renderPipeline);

        for (const mesh of renderData.meshes) {
            const mvpMatrix = glMatrix.mat4.create();
            glMatrix.mat4.multiply(mvpMatrix, renderData.mvpMatrix, mesh.modelMatrix);
            const modelMatrix = glMatrix.mat4.create();
            glMatrix.mat4.multiply(modelMatrix, renderData.modelMatrix, mesh.modelMatrix);

            this.uniforms.setValueFromName("mvp", mvpMatrix);
            this.uniforms.setValueFromName("modelMatrix", modelMatrix);
            this.uniforms.uploadToGPU();

            renderpassEncoder.setVertexBuffer(0, mesh.buffer.gpuBuffer);
            renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
            renderpassEncoder.draw(mesh.verticesCount);
        }
    }

    public free(): void {
        this.uniforms.free();
    }
}

export {
    MeshRenderer,
};


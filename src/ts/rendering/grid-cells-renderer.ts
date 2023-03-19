import * as glMatrix from "gl-matrix";
import { GridData, NonEmptyCellsBuffers } from "../engine/engine";
import * as ShaderSources from "../shader-sources";
import * as WebGPU from "../webgpu-utils/webgpu-utils";

type RenderData = {
    readonly buffers: NonEmptyCellsBuffers;
    readonly gridData: GridData;
    readonly mvpMatrix: glMatrix.ReadonlyMat4;
};

class GridCellsRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly uniformsBindgroup: GPUBindGroup;

    public constructor(webgpuCanvas: WebGPU.Canvas) {
        this.device = webgpuCanvas.device;

        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "color", type: WebGPU.Types.vec4F32 },
            { name: "gridSize", type: WebGPU.Types.vec3U32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("color", [1, 1, 1, 1]);

        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.GridCells,
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
                                format: "uint32",
                            }
                        ],
                        arrayStride: Uint32Array.BYTES_PER_ELEMENT,
                        stepMode: "instance",
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

    public render(renderpassEncoder: GPURenderPassEncoder, renderData: RenderData): void {
        this.uniforms.setValueFromName("mvp", renderData.mvpMatrix);
        this.uniforms.setValueFromName("gridSize", renderData.gridData.gridSize);
        this.uniforms.setValueFromName("cellSize", renderData.gridData.cellSize);
        this.uniforms.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.setVertexBuffer(0, renderData.buffers.nonEmptyCellsIndicesBuffer);
        renderpassEncoder.drawIndirect(renderData.buffers.cellsIndirectDrawBuffer, 0);
    }
}

export {
    GridCellsRenderer,
};


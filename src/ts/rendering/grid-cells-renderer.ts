import * as glMatrix from "gl-matrix";
import { type CellsData } from "../engine/engine";
import * as Types from "../webgpu-utils/host-shareable-types/types";
import * as ShaderSources from "../webgpu-utils/shader-sources";
import { UniformsBuffer } from "../webgpu-utils/uniforms-buffer";
import { WebGPUCanvas } from "../webgpu-utils/webgpu-canvas";
import { type ViewData } from "./camera";

class GridCellsRenderer {
    private readonly device: GPUDevice;
    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniformsBuffer: UniformsBuffer;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPUCanvas, modelMatrix: glMatrix.ReadonlyMat4) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        const shaderModule = this.device.createShaderModule({ code: ShaderSources.Rendering.GridCells });

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

        this.uniformsBuffer = new UniformsBuffer(this.device, new Types.StructType("Uniforms", [
            { name: "mvp", type: Types.mat4x4 },
            { name: "color", type: Types.vec4F32 },
            { name: "gridSize", type: Types.vec3U32 },
            { name: "cellSize", type: Types.f32 },
        ]));
        this.uniformsBuffer.setValueFromName("color", [1, 1, 1, 1]);

        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                binding: 0,
                resource: this.uniformsBuffer.bindingResource,
            }]
        });
    }

    public render(renderpassEncoder: GPURenderPassEncoder, viewData: ViewData, data: CellsData): void {
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniformsBuffer.setValueFromName("mvp", this.mvpMatrix);
        this.uniformsBuffer.setValueFromName("gridSize", data.gridSize);
        this.uniformsBuffer.setValueFromName("cellSize", data.cellSize);
        this.uniformsBuffer.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.setVertexBuffer(0, data.cellsIndicesBuffer);
        renderpassEncoder.drawIndirect(data.cellsIndirectDrawBuffer, 0);
    }
}

export {
    GridCellsRenderer,
};

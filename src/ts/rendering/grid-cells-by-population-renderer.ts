import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../shader-sources";
import * as WebGPU from "../webgpu-utils/webgpu-utils";
import { type ViewData } from "./camera";

type Data = {
    cellsBuffer: WebGPU.Buffer;
    cellsCount: number;
    particlesCountAttribute: WebGPU.Types.VertexAttribute;
    gridSize: glMatrix.ReadonlyVec3;
    cellSize: number;
};

class GridCellsByPopulationRenderer {
    private readonly device: GPUDevice;

    private readonly cellsCount: number;
    private readonly cellsBuffer: WebGPU.Buffer;

    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly uniformsBindgroup: GPUBindGroup;

    private readonly matrix: glMatrix.ReadonlyMat4;
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    public constructor(webgpuCanvas: WebGPU.Canvas, modelMatrix: glMatrix.ReadonlyMat4, data: Data) {
        this.device = webgpuCanvas.device;
        this.matrix = modelMatrix;

        this.cellsCount = data.cellsCount;
        this.cellsBuffer = data.cellsBuffer;

        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "color", type: WebGPU.Types.vec4F32 },
            { name: "gridSize", type: WebGPU.Types.vec3U32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("color", [1, 1, 1, 1]);
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);

        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Engine.Indexing.RenderCellsByPopulation,
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
                                offset: data.particlesCountAttribute.offset,
                                format: data.particlesCountAttribute.format,
                            }
                        ],
                        arrayStride: data.particlesCountAttribute.arrayStride,
                        stepMode: "instance",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                    format: webgpuCanvas.textureFormat,
                    blend: {
                        color: {
                            srcFactor: "src-alpha",
                            dstFactor: "one-minus-src-alpha",
                            operation: "add",
                        },
                        alpha: {
                            srcFactor: "zero",
                            dstFactor: "one",
                            operation: "add",
                        }
                    },
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
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.matrix);

        this.uniforms.setValueFromName("mvp", this.mvpMatrix);
        this.uniforms.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.setVertexBuffer(0, this.cellsBuffer.gpuBuffer);
        renderpassEncoder.draw(24, this.cellsCount);
    }
}

export {
    GridCellsByPopulationRenderer,
};


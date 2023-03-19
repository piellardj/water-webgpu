import * as glMatrix from "gl-matrix";
import { CellsBufferDescriptor, GridData } from "../engine/engine";
import * as ShaderSources from "../shader-sources";
import * as WebGPU from "../webgpu-utils/webgpu-utils";

type RenderData = {
    readonly mvpMatrix: glMatrix.ReadonlyMat4;
    readonly gpuBuffer: GPUBuffer;
    readonly gridData: GridData;
};

class GridCellsByPopulationRenderer {
    private readonly device: GPUDevice;

    private readonly renderPipeline: GPURenderPipeline;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly uniformsBindgroup: GPUBindGroup;

    public constructor(webgpuCanvas: WebGPU.Canvas, bufferDescriptor: CellsBufferDescriptor) {
        this.device = webgpuCanvas.device;

        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "color", type: WebGPU.Types.vec4F32 },
            { name: "gridSize", type: WebGPU.Types.vec3U32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("color", [1, 1, 1, 1]);

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
                                offset: bufferDescriptor.particlesCountAttribute.offset,
                                format: bufferDescriptor.particlesCountAttribute.format,
                            }
                        ],
                        arrayStride: bufferDescriptor.bufferArrayStride,
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

    public render(renderpassEncoder: GPURenderPassEncoder, data: RenderData): void {
        this.uniforms.setValueFromName("mvp", data.mvpMatrix);
        this.uniforms.setValueFromName("gridSize", data.gridData.gridSize);
        this.uniforms.setValueFromName("cellSize", data.gridData.cellSize);
        this.uniforms.uploadToGPU();

        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.setVertexBuffer(0, data.gpuBuffer);
        renderpassEncoder.draw(24, data.gridData.gridSize[0] * data.gridData.gridSize[1] * data.gridData.gridSize[2]);
    }
}

export {
    GridCellsByPopulationRenderer,
};


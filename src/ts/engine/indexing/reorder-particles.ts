import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";
import { type CellsBufferData } from "./indexing";

type Data = {
    particlesBufferData: ParticlesBufferData,
    cellsBufferData: CellsBufferData,
    gridSize: glMatrix.ReadonlyVec3,
    cellSize: number,
};

class ReorderParticles {
    private static readonly WORKGROUP_SIZE: number = 256;

    private readonly workgroupsCount: number;

    private readonly sourceParticlesBuffer: WebGPU.Buffer;
    private readonly tempParticlesBuffer: WebGPU.Buffer;

    private readonly pipeline: GPUComputePipeline;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / ReorderParticles.WORKGROUP_SIZE);

        this.sourceParticlesBuffer = data.particlesBufferData.particlesBuffer;
        if (!this.sourceParticlesBuffer.hasUsage(GPUBufferUsage.COPY_DST)) {
            throw new Error();
        }

        this.tempParticlesBuffer = new WebGPU.Buffer(device, {
            size: this.sourceParticlesBuffer.size,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
        });
        if (!this.tempParticlesBuffer.hasUsage(GPUBufferUsage.COPY_SRC)) {
            throw new Error();
        }

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.ReorderParticles,
                    structs: [data.cellsBufferData.cellStructType, data.particlesBufferData.particlesStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: ReorderParticles.WORKGROUP_SIZE,
                },
            },
        });
        this.bindgroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.cellsBufferData.cellsBufferBindingResource,
                },
                {
                    binding: 2,
                    resource: this.tempParticlesBuffer.bindingResource,
                },
                {
                    binding: 3,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
        commandEncoder.copyBufferToBuffer(this.tempParticlesBuffer.gpuBuffer, 0, this.sourceParticlesBuffer.gpuBuffer, 0, this.sourceParticlesBuffer.size);
    }
}

export {
    ReorderParticles,
};


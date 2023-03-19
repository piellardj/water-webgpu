import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type ParticlesBufferData } from "../engine";
import { CellsBufferData } from "./indexing";

type Data = {
    cellsBufferData: CellsBufferData;
    gridSize: glMatrix.ReadonlyVec3,
    cellSize: number,

    particlesBufferData: ParticlesBufferData,
};

type ResetResult = {
    workgroupsCount: number;
    bindgroup: GPUBindGroup;
};

class CountParticlesPerCell {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly device: GPUDevice;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly pipeline: GPUComputePipeline;

    private workgroupsCount: number;
    private bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        const cellStructType = new WebGPU.Types.StructType("Cell", [
            { name: "particlesCount", type: WebGPU.Types.atomicU32 },
            { name: "offset", type: WebGPU.Types.u32 },
        ]);

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.CountParticlesPerCell,
                    structs: [this.uniforms, cellStructType, data.particlesBufferData.particlesStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: CountParticlesPerCell.WORKGROUP_SIZE,
                },
            },
        });

        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }

    public reset(data: Data): void {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }

    private applyReset(data: Data): ResetResult {
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();

        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / CountParticlesPerCell.WORKGROUP_SIZE);

        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });

        return { workgroupsCount, bindgroup };
    }
}

export {
    CountParticlesPerCell,
};


import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";

type Data = {
    particlesBufferData: ParticlesBufferData;
    weightThreshold: number;
};

type ResetResult = {
    workgroupsCount: number;
    bindgroup: GPUBindGroup;
};

class ParticlesRotation {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly device: GPUDevice;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly pipeline: GPUComputePipeline;

    private workgroupsCount: number;
    private bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "rotationMatrix", type: WebGPU.Types.mat4x4 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 },
        ]);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.ObstaclesRotation,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: ParticlesRotation.WORKGROUP_SIZE,
                },
            },
        });

        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }

    public compute(commandEncoder: GPUCommandEncoder, rotationMatrix: glMatrix.ReadonlyMat4): void {
        this.uniforms.setValueFromName("rotationMatrix", rotationMatrix);
        this.uniforms.uploadToGPU();

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
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("weightThreshold", data.weightThreshold);

        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / ParticlesRotation.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });

        return { workgroupsCount, bindgroup };
    }
}

export {
    ParticlesRotation,
};


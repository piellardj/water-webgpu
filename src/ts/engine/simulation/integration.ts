import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";

type Data = {
    particlesBufferData: ParticlesBufferData;
    particleRadius: number;
    weightThreshold: number;
};

class Integration {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    private readonly uniforms: WebGPU.Uniforms;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Integration.WORKGROUP_SIZE);

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "dt", type: WebGPU.Types.f32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "particleRadius", type: WebGPU.Types.f32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("particleRadius", data.particleRadius);
        this.uniforms.setValueFromName("weightThreshold", data.weightThreshold);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Integration,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Integration.WORKGROUP_SIZE,
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
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
    }

    public compute(commandEncoder: GPUCommandEncoder, dt: number): void {
        this.uniforms.setValueFromName("dt", dt);
        this.uniforms.uploadToGPU();

        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
}

export {
    Integration,
};


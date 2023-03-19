import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";
import * as glMatrix from "gl-matrix";

type Data = {
    initialPositions: ReadonlyArray<glMatrix.ReadonlyVec3>;
    particlesBufferData: ParticlesBufferData;
};

class Initialization {
    private static readonly WORKGROUP_SIZE: number = 256;

    private readonly workgroupsCount: number;

    private readonly positionsBuffer: WebGPU.Buffer;

    private readonly uniforms: WebGPU.Uniforms;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        if (data.particlesBufferData.particlesCount !== data.initialPositions.length) {
            throw new Error();
        }

        this.workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Initialization.WORKGROUP_SIZE);

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();

        const initialParticleStructType = new WebGPU.Types.StructType("InitialParticle", [
            {name: "position", type: WebGPU.Types.vec3F32},
            {name: "weight", type: WebGPU.Types.f32},
        ]);

        this.positionsBuffer = new WebGPU.Buffer(device, {
            size: initialParticleStructType.size * data.initialPositions.length,
            usage: GPUBufferUsage.STORAGE,
        });
        const positionsData = this.positionsBuffer.getMappedRange();
        data.initialPositions.forEach((position: glMatrix.ReadonlyVec3, index: number) => {
            const offset = index * initialParticleStructType.size;
            const data = {
                position,
                weight: 1, 
            };
            initialParticleStructType.setValue(positionsData, offset, data);
        });
        this.positionsBuffer.unmap();

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Initialization,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms, initialParticleStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Initialization.WORKGROUP_SIZE,
                },
            },
        });
        this.bindgroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: this.positionsBuffer.bindingResource,
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
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
}

export {
    Initialization,
};


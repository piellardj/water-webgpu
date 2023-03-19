import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";
import * as glMatrix from "gl-matrix";

type Data = {
    particlesPositions: ReadonlyArray<glMatrix.ReadonlyVec3>;
    obstaclesPositions: ReadonlyArray<glMatrix.ReadonlyVec3>;
    particlesBufferData: ParticlesBufferData;
};

class Initialization {
    private static readonly WORKGROUP_SIZE: number = 256;
    public static readonly PARTICLE_WEIGHT_WATER: number = 1;
    public static readonly PARTICLE_WEIGHT_THRESHOLD: number = 10;
    public static readonly PARTICLE_WEIGHT_OBSTACLE: number = 100000;

    private readonly workgroupsCount: number;

    private readonly positionsBuffer: WebGPU.Buffer;

    private readonly uniforms: WebGPU.Uniforms;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        if (data.particlesBufferData.particlesCount !== (data.particlesPositions.length + data.obstaclesPositions.length)) {
            throw new Error();
        }

        this.workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Initialization.WORKGROUP_SIZE);

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();

        const initialParticleStructType = new WebGPU.Types.StructType("InitialParticle", [
            { name: "position", type: WebGPU.Types.vec3F32 },
            { name: "weight", type: WebGPU.Types.f32 },
        ]);

        this.positionsBuffer = new WebGPU.Buffer(device, {
            size: initialParticleStructType.size * (data.particlesPositions.length + data.obstaclesPositions.length),
            usage: GPUBufferUsage.STORAGE,
        });
        const positionsData = this.positionsBuffer.getMappedRange();
        data.particlesPositions.forEach((position: glMatrix.ReadonlyVec3, index: number) => {
            const offset = index * initialParticleStructType.size;
            initialParticleStructType.setValue(positionsData, offset, {
                position,
                weight: Initialization.PARTICLE_WEIGHT_WATER,
            });
        });
        data.obstaclesPositions.forEach((position: glMatrix.ReadonlyVec3, index: number) => {
            const offset = (data.particlesPositions.length + index) * initialParticleStructType.size;
            initialParticleStructType.setValue(positionsData, offset, {
                position,
                weight: Initialization.PARTICLE_WEIGHT_OBSTACLE,
            });
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


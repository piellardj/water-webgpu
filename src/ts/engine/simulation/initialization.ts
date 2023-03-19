import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";

type Data = {
    particlesPositions: ReadonlyArray<glMatrix.ReadonlyVec3>;
    obstaclesPositions: ReadonlyArray<glMatrix.ReadonlyVec3>;
    particlesBufferData: ParticlesBufferData;
};

type ResetResult = {
    workgroupsCount: number;
    positionsBuffer: WebGPU.Buffer;
    bindgroup: GPUBindGroup;
};

class Initialization {
    private static readonly WORKGROUP_SIZE: number = 256;
    public static readonly PARTICLE_WEIGHT_WATER: number = 1;
    public static readonly PARTICLE_WEIGHT_THRESHOLD: number = 10;
    public static readonly PARTICLE_WEIGHT_OBSTACLE: number = 100000;

    private static readonly initialParticleStructType: WebGPU.Types.StructType = new WebGPU.Types.StructType("InitialParticle", [
        { name: "position", type: WebGPU.Types.vec3F32 },
        { name: "weight", type: WebGPU.Types.f32 },
    ]);

    private readonly device: GPUDevice;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly pipeline: GPUComputePipeline;

    private workgroupsCount: number;
    private positionsBuffer: WebGPU.Buffer;
    private bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Initialization,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms, Initialization.initialParticleStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Initialization.WORKGROUP_SIZE,
                },
            },
        });

        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.positionsBuffer = resetResult.positionsBuffer;
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
        this.positionsBuffer.free();
        this.positionsBuffer = resetResult.positionsBuffer;
        this.bindgroup = resetResult.bindgroup;
    }

    private applyReset(data: Data): ResetResult {
        if (data.particlesBufferData.particlesCount !== (data.particlesPositions.length + data.obstaclesPositions.length)) {
            throw new Error();
        }

        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Initialization.WORKGROUP_SIZE);

        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();

        const positionsBuffer = new WebGPU.Buffer(this.device, {
            size: Initialization.initialParticleStructType.size * (data.particlesPositions.length + data.obstaclesPositions.length),
            usage: GPUBufferUsage.STORAGE,
        });
        const positionsData = positionsBuffer.getMappedRange();
        data.particlesPositions.forEach((position: glMatrix.ReadonlyVec3, index: number) => {
            const offset = index * Initialization.initialParticleStructType.size;
            Initialization.initialParticleStructType.setValue(positionsData, offset, {
                position,
                weight: Initialization.PARTICLE_WEIGHT_WATER,
            });
        });
        data.obstaclesPositions.forEach((position: glMatrix.ReadonlyVec3, index: number) => {
            const offset = (data.particlesPositions.length + index) * Initialization.initialParticleStructType.size;
            Initialization.initialParticleStructType.setValue(positionsData, offset, {
                position,
                weight: Initialization.PARTICLE_WEIGHT_OBSTACLE,
            });
        });
        positionsBuffer.unmap();

        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: positionsBuffer.bindingResource,
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

        return { workgroupsCount, positionsBuffer, bindgroup };
    }
}

export {
    Initialization,
};


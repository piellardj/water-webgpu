import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import { Parameters } from "../../ui/parameters";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { ParticlesBufferData } from "../engine";
import { CellsBufferData } from "../indexing/indexing";

type Data = {
    particlesBufferData: ParticlesBufferData;
    particleRadius: number;
    cellsBufferData: CellsBufferData;
    gridSize: glMatrix.ReadonlyVec3,
    cellSize: number,
    weightThreshold: number,
};

type ResetResult = {
    workgroupsCount: number;
    bindgroup: GPUBindGroup;
};

class Acceleration {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly device: GPUDevice;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly pipeline: GPUComputePipeline;

    private workgroupsCount: number;
    private bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particleRadius", type: WebGPU.Types.f32 },
            { name: "gravity", type: WebGPU.Types.vec3F32 },
            { name: "dt", type: WebGPU.Types.f32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 },
        ]);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Acceleration,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms, data.cellsBufferData.cellStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Acceleration.WORKGROUP_SIZE,
                },
            },
        });

        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }

    public compute(commandEncoder: GPUCommandEncoder, dt: number): void {
        const now = 0.0003 * performance.now();
        this.uniforms.setValueFromName("gravity", [0, Parameters.gravity * Math.cos(now), Parameters.gravity * Math.sin(now)]);

        // this.uniforms.setValueFromName("gravity", [0, 0, -Parameters.gravity]);
        this.uniforms.setValueFromName("dt", dt);
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
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("particleRadius", data.particleRadius);
        this.uniforms.setValueFromName("weightThreshold", data.weightThreshold);

        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Acceleration.WORKGROUP_SIZE);

        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
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
    Acceleration,
};


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
};

class Acceleration {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    private readonly uniforms: WebGPU.Uniforms;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Acceleration.WORKGROUP_SIZE);

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particleRadius", type: WebGPU.Types.f32 },
            { name: "gravity", type: WebGPU.Types.vec3F32 },
            { name: "dt", type: WebGPU.Types.f32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "damping", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("particleRadius", data.particleRadius);
        this.uniforms.setValueFromName("damping", 0.8);

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
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
    }

    public compute(commandEncoder: GPUCommandEncoder, dt: number): void {
        this.uniforms.setValueFromName("gravity", [0, 0, -Parameters.gravity]);
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
    Acceleration,
};


import * as glMatrix from "gl-matrix";
import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    cellsBuffer: WebGPU.Buffer;
    gridSize: glMatrix.ReadonlyVec3,
    cellSize: number,
    particlesBuffer: WebGPU.Buffer;
    particlesCount: number;
};

class CountParticlesPerCell {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    private readonly uniformsBuffer: WebGPU.Uniforms;
    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.particlesCount / CountParticlesPerCell.WORKGROUP_SIZE);

        this.uniformsBuffer = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.uniformsBuffer.setValueFromName("gridSize", data.gridSize);
        this.uniformsBuffer.setValueFromName("cellSize", data.cellSize);
        this.uniformsBuffer.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniformsBuffer.setValueFromName("particlesCount", data.particlesCount);
        this.uniformsBuffer.uploadToGPU();

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: device.createShaderModule({ code: ShaderSources.Engine.Indexing.CountParticlesPerCell }),
                entryPoint: "main",
                constants: {
                    workgroupSize: CountParticlesPerCell.WORKGROUP_SIZE,
                },
            },
        });
        this.bindgroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.particlesBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniformsBuffer.bindingResource,
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
    CountParticlesPerCell,
};


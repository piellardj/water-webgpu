import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    dataItemsBuffer: WebGPU.Buffer,
    cellsBuffer: WebGPU.Buffer;
    cellsCount: number;

    cellsIndirectDrawBuffer: WebGPU.Buffer,
    drawableCellsIndicesBuffer: WebGPU.Buffer,
};

class FinalizePrefixSum {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.cellsCount / FinalizePrefixSum.WORKGROUP_SIZE);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: device.createShaderModule({ code: ShaderSources.Engine.Indexing.FinalizePrefixSum }),
                entryPoint: "main",
                constants: {
                    cellsCount: data.cellsCount,
                    workgroupSize: FinalizePrefixSum.WORKGROUP_SIZE,
                },
            },
        });
        this.bindgroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.dataItemsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.cellsBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: data.cellsIndirectDrawBuffer.bindingResource,
                },
                {
                    binding: 3,
                    resource: data.drawableCellsIndicesBuffer.bindingResource,
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
    FinalizePrefixSum,
};


import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type CellsBufferData } from "./indexing";

type Data = {
    dataItemsBuffer: WebGPU.Buffer,

    cellsBufferData: CellsBufferData,

    cellsIndirectDrawBuffer: WebGPU.Buffer,
    nonEmptyCellsIndicesBuffer: WebGPU.Buffer,
};

class FinalizePrefixSum {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.cellsBufferData.cellsCount / FinalizePrefixSum.WORKGROUP_SIZE);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.FinalizePrefixSum,
                    structs: [data.cellsBufferData.cellStructType, WebGPU.Types.indirectDrawBufferType],
                }),
                entryPoint: "main",
                constants: {
                    cellsCount: data.cellsBufferData.cellsCount,
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
                    resource: data.cellsBufferData.cellsBufferBindingResource,
                },
                {
                    binding: 2,
                    resource: data.cellsIndirectDrawBuffer.bindingResource,
                },
                {
                    binding: 3,
                    resource: data.nonEmptyCellsIndicesBuffer.bindingResource,
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


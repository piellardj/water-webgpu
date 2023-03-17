import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type CellsBufferData } from "./indexing";

type Data = {
    cellsBufferData: CellsBufferData;
};

class PreparePrefixSum {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    public readonly dataItemsBuffer: WebGPU.Buffer;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.cellsBufferData.cellsCount / PreparePrefixSum.WORKGROUP_SIZE);

        this.dataItemsBuffer = new WebGPU.Buffer(device, {
            size: (Uint32Array.BYTES_PER_ELEMENT * 2) * data.cellsBufferData.cellsCount,
            usage: GPUBufferUsage.STORAGE,
        });

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.PreparePrefixSum,
                    structs: [data.cellsBufferData.cellStructType],
                }),
                entryPoint: "main",
                constants: {
                    cellsCount: data.cellsBufferData.cellsCount,
                    workgroupSize: PreparePrefixSum.WORKGROUP_SIZE,
                },
            },
        });
        this.bindgroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBufferData.cellsBufferBindingResource,
                },
                {
                    binding: 1,
                    resource: this.dataItemsBuffer.bindingResource,
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
    PreparePrefixSum,
};


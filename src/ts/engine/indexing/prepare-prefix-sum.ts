import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    cellsBuffer: WebGPU.Buffer;
    cellsCount: number;
};

class PreparePrefixSum {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly workgroupsCount: number;

    public readonly dataItemsBuffer: WebGPU.Buffer;

    private readonly pipeline: GPUComputePipeline;
    private readonly bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.workgroupsCount = Math.ceil(data.cellsCount / PreparePrefixSum.WORKGROUP_SIZE);

        this.dataItemsBuffer = new WebGPU.Buffer(device, {
            size: (Uint32Array.BYTES_PER_ELEMENT * 2) * data.cellsCount,
            usage: GPUBufferUsage.STORAGE,
        });

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: device.createShaderModule({ code: ShaderSources.Engine.Indexing.PreparePrefixSum }),
                entryPoint: "main",
                constants: {
                    cellsCount: data.cellsCount,
                    workgroupSize: PreparePrefixSum.WORKGROUP_SIZE,
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


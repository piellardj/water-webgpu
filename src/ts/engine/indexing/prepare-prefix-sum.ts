import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";
import { type CellsBufferData } from "./indexing";

type Data = {
    cellsBufferData: CellsBufferData;
};

type ResetResult = {
    workgroupsCount: number;
    dataItemsBuffer: WebGPU.Buffer;
    bindgroup: GPUBindGroup;
};

class PreparePrefixSum {
    private static readonly WORKGROUP_SIZE: number = 128;

    private readonly device: GPUDevice;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly pipeline: GPUComputePipeline;

    private workgroupsCount: number;
    public dataItemsBuffer: WebGPU.Buffer;
    private bindgroup: GPUBindGroup;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "cellsCount", type: WebGPU.Types.u32 },
        ]);

        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.PreparePrefixSum,
                    structs: [data.cellsBufferData.cellStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: PreparePrefixSum.WORKGROUP_SIZE,
                },
            },
        });

        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.dataItemsBuffer = resetResult.dataItemsBuffer;
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
        this.dataItemsBuffer.free();

        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.dataItemsBuffer = resetResult.dataItemsBuffer;
        this.bindgroup = resetResult.bindgroup;
    }

    private applyReset(data: Data): ResetResult {
        this.uniforms.setValueFromName("cellsCount", data.cellsBufferData.cellsCount);
        this.uniforms.uploadToGPU();

        const workgroupsCount = Math.ceil(data.cellsBufferData.cellsCount / PreparePrefixSum.WORKGROUP_SIZE);

        const dataItemsBuffer = new WebGPU.Buffer(this.device, {
            size: (Uint32Array.BYTES_PER_ELEMENT * 2) * data.cellsBufferData.cellsCount,
            usage: GPUBufferUsage.STORAGE,
        });

        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: dataItemsBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });

        return { workgroupsCount, dataItemsBuffer, bindgroup };
    }
}

export {
    PreparePrefixSum,
};


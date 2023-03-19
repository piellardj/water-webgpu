import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    itemsBuffer: WebGPU.Buffer;
    type: WebGPU.Types.Type;
    itemsCount: number;
};

type ResetResult = {
    dispatchSize: number;
    localTotalsBuffer: WebGPU.Buffer;

    reduceBindgroup: GPUBindGroup;
    downPassBindgroup: GPUBindGroup | null;

    childPrefixSum: PrefixSum | null;
};

class PrefixSum {
    private static readonly MAX_WORKGROUP_LEVEL = 8;
    private static readonly WORKGROUP_SIZE = 1 << (PrefixSum.MAX_WORKGROUP_LEVEL - 1);

    private static reducePipeline: GPUComputePipeline;
    private static downPassPipeline: GPUComputePipeline | null = null;

    private readonly device: GPUDevice;
    private readonly uniforms: WebGPU.Uniforms;

    private dispatchSize: number;
    private localTotalsBuffer: WebGPU.Buffer;

    private reduceBindgroup: GPUBindGroup;
    private downPassBindgroup: GPUBindGroup | null = null;

    private childPrefixSum: PrefixSum | null = null;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "itemsCount", type: WebGPU.Types.u32 },
        ]);

        if (!PrefixSum.reducePipeline) {
            PrefixSum.reducePipeline = device.createComputePipeline({
                layout: "auto",
                compute: {
                    module: WebGPU.ShaderModule.create(device, {
                        code: ShaderSources.Engine.Indexing.PrefixSum.Reduce,
                        aliases: {
                            "Type": data.type.typeName,
                        },
                        structs: [this.uniforms],
                    }),
                    entryPoint: "main",
                    constants: {
                        workgroupSize: PrefixSum.WORKGROUP_SIZE,
                        maxLevel: PrefixSum.MAX_WORKGROUP_LEVEL,
                    },
                }
            });
        }

        const resetResult = this.applyReset(data);
        this.dispatchSize = resetResult.dispatchSize;
        this.localTotalsBuffer = resetResult.localTotalsBuffer;

        this.reduceBindgroup = resetResult.reduceBindgroup;
        this.downPassBindgroup = resetResult.downPassBindgroup;

        this.childPrefixSum = resetResult.childPrefixSum;
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        if (!PrefixSum.reducePipeline) {
            throw new Error();
        }

        const reducePass = commandEncoder.beginComputePass();
        reducePass.setPipeline(PrefixSum.reducePipeline);
        this.localSort(reducePass);
        reducePass.end();

        if (this.childPrefixSum) {
            if (!PrefixSum.downPassPipeline) {
                throw new Error();
            }

            const downPass = commandEncoder.beginComputePass();
            downPass.setPipeline(PrefixSum.downPassPipeline);
            this.downPass(downPass);
            downPass.end();
        }
    }

    private localSort(pass: GPUComputePassEncoder): void {
        pass.setBindGroup(0, this.reduceBindgroup);
        pass.dispatchWorkgroups(this.dispatchSize);

        if (this.childPrefixSum) {
            this.childPrefixSum.localSort(pass);
        }
    }

    private downPass(pass: GPUComputePassEncoder): void {
        if (this.childPrefixSum) {
            this.childPrefixSum.downPass(pass);

            if (!this.downPassBindgroup) {
                throw new Error();
            }

            pass.setBindGroup(0, this.downPassBindgroup);
            pass.dispatchWorkgroups(this.dispatchSize);
        }
    }

    public reset(data: Data): void {
        this.localTotalsBuffer.free();

        let child = this.childPrefixSum;
        while (child) {
            child.localTotalsBuffer.free();
            child.uniforms.free();
            child = child.childPrefixSum;
        }

        const resetResult = this.applyReset(data);
        this.dispatchSize = resetResult.dispatchSize;
        this.localTotalsBuffer = resetResult.localTotalsBuffer;

        this.reduceBindgroup = resetResult.reduceBindgroup;
        this.downPassBindgroup = resetResult.downPassBindgroup;

        this.childPrefixSum = resetResult.childPrefixSum;
    }

    private applyReset(data: Data): ResetResult {
        if (data.itemsBuffer.size !== data.type.size * data.itemsCount) {
            throw new Error("Prefix sum: invalid data");
        }

        this.uniforms.setValueFromName("itemsCount", data.itemsCount);
        this.uniforms.uploadToGPU();

        const dispatchSize = Math.ceil(data.itemsCount / PrefixSum.WORKGROUP_SIZE);

        const localTotalsBuffer = new WebGPU.Buffer(this.device, {
            size: data.type.size * dispatchSize,
            usage: GPUBufferUsage.STORAGE,
        });

        const reduceBindgroup = this.device.createBindGroup({
            layout: PrefixSum.reducePipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.itemsBuffer.bindingResource,
                }, {
                    binding: 1,
                    resource: localTotalsBuffer.bindingResource,
                }, {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                }
            ]
        });

        let childPrefixSum: PrefixSum | null = null;
        let downPassBindgroup: GPUBindGroup | null = null;

        if (dispatchSize > 1) { // I will need another prefix sum on the totals
            if (!PrefixSum.downPassPipeline) {
                PrefixSum.downPassPipeline = this.device.createComputePipeline({
                    layout: "auto",
                    compute: {
                        module: WebGPU.ShaderModule.create(this.device, {
                            code: ShaderSources.Engine.Indexing.PrefixSum.DownPass,
                            aliases: {
                                "Type": data.type.typeName,
                            },
                            structs: [this.uniforms],
                        }),
                        entryPoint: "main",
                        constants: {
                            workgroupSize: PrefixSum.WORKGROUP_SIZE,
                        },
                    }
                });
            }

            downPassBindgroup = this.device.createBindGroup({
                layout: PrefixSum.downPassPipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: localTotalsBuffer.bindingResource,
                    }, {
                        binding: 1,
                        resource: data.itemsBuffer.bindingResource,
                    }, {
                        binding: 2,
                        resource: this.uniforms.bindingResource,
                    }
                ]
            });

            childPrefixSum = new PrefixSum(this.device, {
                itemsBuffer: localTotalsBuffer,
                itemsCount: dispatchSize,
                type: data.type,
            });
        }

        return { dispatchSize, localTotalsBuffer, reduceBindgroup, downPassBindgroup, childPrefixSum };
    }
}

export {
    PrefixSum,
};


import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    itemsBuffer: WebGPU.Buffer;
    itemsCount: number;
};

class PrefixSum {
    private static readonly MAX_WORKGROUP_LEVEL = 8;
    private static readonly WORKGROUP_SIZE = 1 << (PrefixSum.MAX_WORKGROUP_LEVEL - 1);

    private static reducePipeline: GPUComputePipeline;
    private static downPassPipeline: GPUComputePipeline | null = null;

    private readonly dispatchSize: number;
    private readonly itemsBuffer: WebGPU.Buffer;
    private readonly uniforms: WebGPU.Uniforms;
    private readonly localTotalsBuffer: WebGPU.Buffer;

    private readonly reduceBindgroup: GPUBindGroup;
    private readonly downPassBindgroup: GPUBindGroup | null = null;

    private readonly childPrefixSum: PrefixSum | null = null;

    public constructor(device: GPUDevice, data: Data) {
        if (!PrefixSum.reducePipeline) {
            PrefixSum.reducePipeline = device.createComputePipeline({
                layout: "auto",
                compute: {
                    module: device.createShaderModule({ code: ShaderSources.Engine.Indexing.PrefixSum.Reduce }),
                    entryPoint: "main",
                    constants: {
                        workgroupSize: PrefixSum.WORKGROUP_SIZE,
                        maxLevel: PrefixSum.MAX_WORKGROUP_LEVEL,
                    },
                }
            });
        }

        this.itemsBuffer = data.itemsBuffer;

        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "itemsCount", type: WebGPU.Types.u32 },
        ]);
        this.uniforms.setValueFromName("itemsCount", data.itemsCount);
        this.uniforms.uploadToGPU();

        this.dispatchSize = Math.ceil(data.itemsCount / PrefixSum.WORKGROUP_SIZE);

        this.localTotalsBuffer = new WebGPU.Buffer(device, {
            size: (Uint32Array.BYTES_PER_ELEMENT * 2) * this.dispatchSize,
            usage: GPUBufferUsage.STORAGE,
        });

        this.reduceBindgroup = device.createBindGroup({
            layout: PrefixSum.reducePipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: this.itemsBuffer.bindingResource,
                }, {
                    binding: 1,
                    resource: this.localTotalsBuffer.bindingResource,
                }, {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                }
            ]
        });

        if (this.dispatchSize > 1) { // I will need another prefix sum on the totals
            if (!PrefixSum.downPassPipeline) {
                PrefixSum.downPassPipeline = device.createComputePipeline({
                    layout: "auto",
                    compute: {
                        module: device.createShaderModule({ code: ShaderSources.Engine.Indexing.PrefixSum.DownPass }),
                        entryPoint: "main",
                        constants: {
                            workgroupSize: PrefixSum.WORKGROUP_SIZE,
                        },
                    }
                });
            }

            this.downPassBindgroup = device.createBindGroup({
                layout: PrefixSum.downPassPipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: this.localTotalsBuffer.bindingResource,
                    }, {
                        binding: 1,
                        resource: this.itemsBuffer.bindingResource,
                    }, {
                        binding: 2,
                        resource: this.uniforms.bindingResource,
                    }
                ]
            });

            this.childPrefixSum = new PrefixSum(device, {
                itemsBuffer: this.localTotalsBuffer,
                itemsCount: this.dispatchSize
            });
        }
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
}

export {
    PrefixSum,
};


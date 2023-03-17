import * as MemoryMetrics from "./helpers/memory-metrics";

type Descriptor = {
    size: GPUSize64;
    usage: GPUBufferUsageFlags;
};

class WebGPUBuffer {
    private static readonly objectType: string = "GPUBuffer";

    private buffer: GPUBuffer | null = null;
    public readonly size: GPUSize64;
    private readonly usage: GPUBufferUsageFlags;

    public constructor(
        private readonly device: GPUDevice,
        descriptor: Descriptor
    ) {
        this.size = descriptor.size;
        this.usage = descriptor.usage;
    }

    public get gpuBuffer(): GPUBuffer {
        if (!this.buffer) {
            this.buffer = this.createBuffer({
                size: this.size,
                usage: this.usage,
            });
        }
        return this.buffer;
    }

    public get bindingResource(): GPUBindingResource {
        return { buffer: this.gpuBuffer };
    }

    public getMappedRange(offset?: GPUSize64, size?: GPUSize64): ArrayBuffer {
        if (!this.buffer) {
            this.buffer = this.createBuffer({
                size: this.size,
                usage: this.usage,
                mappedAtCreation: true,
            });
        }
        if (this.buffer.mapState !== "mapped") {
            throw new Error();
        }
        return this.buffer.getMappedRange(offset, size);
    }

    public unmap(): void {
        if (!this.buffer || this.buffer.mapState !== "mapped") {
            throw new Error();
        }
        this.buffer.unmap();
    }

    public hasUsage(usage: GPUBufferUsageFlags): boolean {
        return (this.usage & usage) === usage;
    }

    public free(): void {
        if (this.buffer) {
            this.buffer.destroy();
            this.buffer = null;

            MemoryMetrics.registerDestruction({
                objectType: WebGPUBuffer.objectType,
                objectSizeInBytes: this.size,
            });
        }
    }

    private createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer {
        const buffer = this.device.createBuffer(descriptor);

        MemoryMetrics.registerAllocation({
            objectType: WebGPUBuffer.objectType,
            objectSizeInBytes: this.size,
        });

        return buffer;
    }
}

export {
    WebGPUBuffer,
};


import { getPrintableSizeFromBytes } from "./helpers/size";

type Descriptor = {
    size: GPUSize64;
    usage: GPUBufferUsageFlags;
};

let totalBuffersSize = 0;

class WebGPUBuffer {
    private buffer: GPUBuffer | null = null;
    private readonly size: GPUSize64;
    private readonly usage: GPUBufferUsageFlags;
    private readonly printableSize: string;

    public constructor(
        private readonly device: GPUDevice,
        descriptor: Descriptor
    ) {
        this.size = descriptor.size;
        this.usage = descriptor.usage;
        this.printableSize = getPrintableSizeFromBytes(this.size);
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
            totalBuffersSize -= this.size;
            console.debug(`Destroyed GPUBuffer of size ${this.printableSize}. Total size of buffers on GPU is now ${getPrintableSizeFromBytes(totalBuffersSize)}.`);
        }
    }

    private createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer {
        const buffer = this.device.createBuffer(descriptor);
        totalBuffersSize += this.size;
        console.debug(`Allocating GPUBuffer of size ${this.printableSize}. Total size of buffers on GPU is now ${getPrintableSizeFromBytes(totalBuffersSize)}.`);
        return buffer;
    }
}


export {
    WebGPUBuffer,
};


import { StructType } from "./host-shareable-types/struct-type";

class UniformsBuffer {
    private readonly device: GPUDevice;
    private readonly structType: StructType;
    private readonly data: ArrayBuffer;
    private readonly gpuBuffer: GPUBuffer;

    public constructor(device: GPUDevice, structType: StructType) {
        this.device = device;
        this.structType = structType;
        this.data = new ArrayBuffer(this.structType.size);
        this.gpuBuffer = this.device.createBuffer({
            size: structType.size,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        });
    }

    public get bindingResource(): GPUBindingResource {
        return { buffer: this.gpuBuffer };
    }

    public setValueFromName(name: string, value: unknown): void {
        this.structType.setValueFromName(this.data, 0, name, value);
    }

    public uploadToGPU(): void {
        this.device.queue.writeBuffer(this.gpuBuffer, 0, this.data);
    }
}

export {
    UniformsBuffer,
    StructType,
};


import { StructType } from "./host-shareable-types/struct-type";
import { WebGPUBuffer } from "./webgpu-buffer";

class UniformsBuffer {
    private readonly device: GPUDevice;
    private readonly structType: StructType;
    private readonly data: ArrayBuffer;
    private readonly gpuBuffer: WebGPUBuffer;
    private needsToUpload: boolean = true;

    public constructor(device: GPUDevice, structType: StructType) {
        this.device = device;
        this.structType = structType;
        this.data = new ArrayBuffer(this.structType.size);
        this.gpuBuffer = new WebGPUBuffer(this.device, {
            size: structType.size,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        });
    }

    public get bindingResource(): GPUBindingResource {
        return this.gpuBuffer.bindingResource;
    }

    public setValueFromName(name: string, value: unknown): void {
        this.structType.setValueFromName(this.data, 0, name, value);
        this.needsToUpload = true;
    }

    public uploadToGPU(): void {
        if (this.needsToUpload) {
            this.device.queue.writeBuffer(this.gpuBuffer.gpuBuffer, 0, this.data);
            this.needsToUpload = false;
        }
    }
}

export {
    UniformsBuffer,
    StructType,
};


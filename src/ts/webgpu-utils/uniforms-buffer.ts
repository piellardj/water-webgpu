import { type AttributeDefinition, StructType } from "./host-shareable-types/struct-type";
import { WebGPUBuffer } from "./webgpu-buffer";

class UniformsBuffer {
    private readonly device: GPUDevice;
    private readonly structType: StructType;
    private readonly data: ArrayBuffer;
    private readonly gpuBuffer: WebGPUBuffer;
    private needsToUpload: boolean = true;

    public constructor(device: GPUDevice, attributesDefinitions: AttributeDefinition[]) {
        this.device = device;
        this.structType = new StructType("Uniforms", attributesDefinitions);
        this.data = new ArrayBuffer(this.structType.size);
        this.gpuBuffer = new WebGPUBuffer(this.device, {
            size: this.structType.size,
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

    public toString(): string {
        return this.structType.toString();
    }
}

export {
    UniformsBuffer,
    StructType,
};


import { iterateOnAllPermutations } from "./helpers/utils";
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

        const bestPermutation = UniformsBuffer.compact(attributesDefinitions);
        const bestStructType = new StructType("Uniforms", bestPermutation);
        if (bestStructType.size < this.structType.size) {
            console.warn(`Uniforms could be more compact.\nCurrent is of size ${this.structType.size}:\n${this.structType}\n\nwhile best is of size ${bestStructType.size}:\n${bestStructType}`);
        }

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

    public free(): void {
        this.gpuBuffer.free();
    }

    public static compact(attributesDefinitions: AttributeDefinition[]): AttributeDefinition[] {
        let bestPermutation = attributesDefinitions;
        let minSize = new StructType("Uniforms", attributesDefinitions).size;

        for (const permutation of iterateOnAllPermutations(attributesDefinitions)) {
            const size = new StructType("Uniforms", permutation).size;
            if (size < minSize) {
                minSize = size;
                bestPermutation = permutation;
            }
        }

        return bestPermutation;
    }
}

export {
    UniformsBuffer,
    StructType,
};


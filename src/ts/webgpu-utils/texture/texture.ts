import * as MemoryMetrics from "../helpers/memory-metrics";
import { textureTypes } from "./texture-types";

function computeMemoryCost(width: number, height: number, format: GPUTextureFormat): number {
    const texelSize = textureTypes[format];
    return width * height * texelSize.texelSize;
}

class Texture {
    private static readonly objectType: string = "GPUTexture";

    private width: number = 1;
    private height: number = 1;
    private texture: GPUTexture | null = null;

    public constructor(
        private readonly device: GPUDevice,
        public readonly format: GPUTextureFormat,
        public readonly usage: GPUTextureUsageFlags
    ) {
    }

    public get(): GPUTexture {
        if (!this.texture) {
            if (this.width <= 0 || this.height <= 0) {
                throw new Error(`Invalid texture size ${this.width}x${this.height}.`);
            }

            this.texture = this.device.createTexture({
                size: [this.width, this.height],
                format: this.format,
                usage: this.usage,
            });
            const width = this.texture.width;
            const height = this.texture.height;

            MemoryMetrics.registerAllocation({
                objectType: Texture.objectType,
                objectSizeInBytes: computeMemoryCost(width, height, this.format),
                properties: `${width}x${height}, ${this.format}`,
            });
        }
        return this.texture;
    }

    public getView(descriptor?: GPUTextureDescriptor): GPUTextureView {
        return this.get().createView(descriptor);
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setSize(width: number, height: number): boolean {
        if (this.width !== width || this.height !== height) {
            this.width = width;
            this.height = height;
            this.free();
            return true;
        }
        return false;
    }

    public hasUsage(usage: GPUTextureUsageFlags): boolean {
        return (this.usage & usage) === usage;
    }

    public free(): void {
        if (this.texture) {
            const width = this.texture.width;
            const height = this.texture.height;
            this.texture.destroy();
            this.texture = null;

            MemoryMetrics.registerDestruction({
                objectType: Texture.objectType,
                objectSizeInBytes: computeMemoryCost(width, height, this.format),
                properties: `${width}x${height}, ${this.format}`,
            });
        }
    }
}

export {
    Texture,
};


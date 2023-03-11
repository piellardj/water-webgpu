class Texture {
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

    public free(): void {
        if (this.texture) {
            this.texture.destroy();
            this.texture = null;
        }
    }
}

export {
    Texture,
};


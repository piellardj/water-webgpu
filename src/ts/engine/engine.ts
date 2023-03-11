type SpheresData = {
    radius: number;
    count: number;
    buffer: GPUBuffer;
};

class Engine {
    private readonly device: GPUDevice;

    private readonly positionsBuffer: GPUBuffer;
    private readonly spheresCount: number = 1;
    private readonly spheresRadius: number = 0.1;

    public constructor(device: GPUDevice) {
        this.device = device;

        this.positionsBuffer = this.device.createBuffer({
            size: 4 * Float32Array.BYTES_PER_ELEMENT * 1,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        new Int32Array(this.positionsBuffer.getMappedRange()).set([0, 0, 0, 0]);
        this.positionsBuffer.unmap();
        this.spheresCount = 1;
    }

    public get spheresData(): SpheresData {
        return {
            radius: this.spheresRadius,
            count: this.spheresCount,
            buffer: this.positionsBuffer,
        };
    }
}

export type {
    SpheresData,
};
export {
    Engine,
};


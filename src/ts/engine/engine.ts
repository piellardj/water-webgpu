import * as InitialPositions from "./initial-positions";
import * as glMatrix from "gl-matrix";

type SpheresData = {
    radius: number;
    count: number;
    buffer: GPUBuffer;
};

class Engine {
    private readonly device: GPUDevice;

    private readonly positionsBuffer: GPUBuffer;
    private readonly spheresCount: number;
    private readonly spheresRadius: number = 0.02;

    public constructor(device: GPUDevice) {
        this.device = device;

        const positions = InitialPositions.fullCube(this.spheresRadius);
        this.spheresCount = positions.length;

        this.positionsBuffer = this.device.createBuffer({
            size: 4 * Float32Array.BYTES_PER_ELEMENT * this.spheresCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        const positionsData = new Float32Array(this.positionsBuffer.getMappedRange());
        positions.forEach((position: glMatrix.vec3, index: number) => {
            const data = [position[0], position[1], position[2], 0];
            const offset = 4 * index;
            positionsData.set(data, offset);
        });
        this.positionsBuffer.unmap();
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


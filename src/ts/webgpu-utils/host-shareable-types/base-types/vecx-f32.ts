import { type Type } from "../base-type";
import { isArrayLike } from "../helpers";

class VecXF32 implements Type {
    public readonly typeName: string;
    public readonly gpuVertexFormat: GPUVertexFormat;
    public readonly align: number;
    public readonly size: number;
    private readonly n: number;

    public constructor(n: 2 | 3 | 4, align: number, size: number) {
        this.typeName = `vec${n}<f32>`;
        this.gpuVertexFormat = `float32x${n}`;
        this.align = align;
        this.size = size;

        this.n = n;
    }

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (!isArrayLike(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value as unknown[];
        if (valueAsArray.length !== this.n) {
            throw new Error(`Invalid value '${value}'.`);
        }

        for (const val of valueAsArray) {
            if (typeof val !== "number") {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Float32Array(arrayBuffer, offset, this.n).set(valueAsArray as ArrayLike<number>);
    }
}

export {
    VecXF32,
};


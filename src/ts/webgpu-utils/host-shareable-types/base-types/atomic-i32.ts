import { type Type } from "../base-type";

class AtomicI32 implements Type {
    public readonly typeName: string = "atomic<i32>";
    public readonly gpuVertexFormat: GPUVertexFormat = "sint32";
    public readonly align: number = 4;
    public readonly size: number = 4;

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (typeof value !== "number" || !Number.isInteger(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }

        new Int32Array(arrayBuffer, offset, 1).set([value]);
    }
}

const atomicI32 = new AtomicI32();

export {
    atomicI32,
};


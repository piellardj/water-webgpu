import { type Type } from "../base-type";

class AtomicU32 implements Type {
    public readonly typeName: string = "atomic<u32>";
    public readonly align: number = 4;
    public readonly size: number = 4;

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
            throw new Error(`Invalid value '${value}'.`);
        }

        new Uint32Array(arrayBuffer, offset, 1).set([value]);
    }
}

const atomicU32 = new AtomicU32();

export {
    atomicU32,
};


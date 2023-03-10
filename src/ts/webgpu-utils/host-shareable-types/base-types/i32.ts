import { type Type } from "../base-type";

class I32 implements Type {
    public readonly typeName: string = "i32";
    public readonly align: number = 4;
    public readonly size: number = 4;

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (typeof value !== "number" || !Number.isInteger(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Int32Array(arrayBuffer, offset, 1).set([value]);
    }
}

const i32 = new I32();

export {
    i32,
};


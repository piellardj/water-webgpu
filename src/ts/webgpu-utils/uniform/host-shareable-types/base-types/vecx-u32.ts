import { type Type } from "../base-type";

class VecXU32 implements Type {
    public readonly typeName: string;
    public readonly align: number;
    public readonly size: number;
    private readonly n: number;

    public constructor(n: number, align: number, size: number) {
        this.typeName = `vec${n}<u32>`;
        this.align = align;
        this.size = size;

        this.n = n;
    }

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (!Array.isArray(value) || value.length !== this.n) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const values = value as unknown[];
        for (const val of value) {
            if (typeof val !== "number" || !Number.isInteger(val) || val < 0) {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Uint32Array(arrayBuffer, offset, this.n).set(values as ArrayLike<number>);
    }
}

export {
    VecXU32,
};


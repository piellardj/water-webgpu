import { type Type } from "../base-type";
import { isArrayLike } from "../helpers";

class Mat2x2 implements Type {
    public readonly typeName: string = "mat2x2<f32>";
    public readonly align: number = 8;
    public readonly size: number = 16;

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (!isArrayLike(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value as ArrayLike<unknown>;
        if (valueAsArray.length !== 2 * 2) {
            throw new Error(`Invalid value '${value}'.`);
        }

        const values = valueAsArray as unknown[];
        for (const val of values) {
            if (typeof val !== "number") {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Float32Array(arrayBuffer, offset, 2 * 2).set(values as ArrayLike<number>);
    }
}

const mat2x2 = new Mat2x2();

export {
    mat2x2,
};


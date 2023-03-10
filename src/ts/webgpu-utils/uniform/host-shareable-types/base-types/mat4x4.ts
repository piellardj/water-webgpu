import { type Type } from "../base-type";
import { isArrayLike } from "../helpers";

class Mat4x4 implements Type {
    public readonly typeName: string = "mat4x4<f32>";
    public readonly align: number = 16;
    public readonly size: number = 64;

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (!isArrayLike(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value as ArrayLike<unknown>;
        if (valueAsArray.length !== 4 * 4) {
            throw new Error(`Invalid value '${value}'.`);
        }

        const values = valueAsArray as unknown[];
        for (const val of values) {
            if (typeof val !== "number") {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Float32Array(arrayBuffer, offset, 4 * 4).set(values as ArrayLike<number>);
    }
}

const mat4x4 = new Mat4x4();

export {
    mat4x4,
};


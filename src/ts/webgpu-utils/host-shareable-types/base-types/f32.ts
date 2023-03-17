import { type Type } from "../base-type";

class F32 implements Type {
    public readonly typeName: string = "f32";
    public readonly gpuVertexFormat: GPUVertexFormat = "float32";
    public readonly align: number = 4;
    public readonly size: number = 4;

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (typeof value !== "number") {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Float32Array(arrayBuffer, offset, 1).set([value]);
    }
}

const f32 = new F32();

export {
    f32,
};


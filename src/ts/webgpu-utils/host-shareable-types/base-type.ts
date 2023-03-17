type Type = {
    readonly typeName: string;
    readonly gpuVertexFormat?: GPUVertexFormat;
    readonly align: number;
    readonly size: number;
    setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void;
}

export type {
    Type,
};


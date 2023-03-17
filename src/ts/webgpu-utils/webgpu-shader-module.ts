import { StructType, UniformsBuffer } from "./uniforms-buffer";

type StructOrUniform = StructType | UniformsBuffer;

type Data = {
    code: string;
    injected?: Record<string, string>;
    structs?: StructOrUniform[];
};

abstract class ShaderModule {
    public static create(device: GPUDevice, data: Data): GPUShaderModule {
        let code = data.code;

        if (data.injected) {
            for (const [key, value] of Object.entries(data.injected)) {
                code = code.replace(key, value);
            }
        }

        if (data.structs) {
            const structsAsString = data.structs.map(struct => struct.toString());
            code = structsAsString.join("\n\n") + "\n\n" + code;
        }

        return device.createShaderModule({ code });
    }
}

export {
    ShaderModule,
};


type Data = {
    code: string;
    injected?: Record<string, string>;
};

abstract class ShaderModule {
    public static create(device: GPUDevice, data: Data): GPUShaderModule {
        let code = data.code;

        if (data.injected) {
            for (const [key, value] of Object.entries(data.injected)) {
                code = code.replace(key, value);
            }
        }

        return device.createShaderModule({ code });
    }
}


export {
    ShaderModule,
};


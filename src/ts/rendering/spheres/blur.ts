import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    readonly deferredTexture: WebGPU.Texture
    readonly foamTexture: WebGPU.Texture
};

class Blur {
    private static readonly WORKGROUP_SIZE = 256;
    private static readonly BLUR_RADIUS = 8;
    private static readonly USEFUL_WORKGROUP_SIZE = Blur.WORKGROUP_SIZE - (2 * Blur.BLUR_RADIUS);

    private readonly device: GPUDevice;
    private readonly temporaryTexture: WebGPU.Texture;
    private readonly temporaryFoamTexture: WebGPU.Texture;
    private readonly pipeline: GPUComputePipeline;
    private readonly uniformsHorizontal: WebGPU.Uniforms;
    private readonly uniformsVertical: WebGPU.Uniforms;
    private bindgroupHorizontal: GPUBindGroup | null = null;
    private bindgroupVertical: GPUBindGroup | null = null;

    public constructor(device: GPUDevice, data: Data) {
        this.device = device;

        this.temporaryTexture = new WebGPU.Texture(device, "rgba8unorm", GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
        this.temporaryFoamTexture = new WebGPU.Texture(device, "rgba8unorm", GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);

        const uniformBufferAttributes = [
            { name: "direction", type: WebGPU.Types.vec2I32 },
            { name: "blurFactors_0", type: WebGPU.Types.f32 },
            { name: "blurFactors_1", type: WebGPU.Types.f32 },
            { name: "blurFactors_2", type: WebGPU.Types.f32 },
            { name: "blurFactors_3", type: WebGPU.Types.f32 },
            { name: "blurFactors_4", type: WebGPU.Types.f32 },
            { name: "blurFactors_5", type: WebGPU.Types.f32 },
            { name: "blurFactors_6", type: WebGPU.Types.f32 },
            { name: "blurFactors_7", type: WebGPU.Types.f32 },
            { name: "blurFactors_8", type: WebGPU.Types.f32 },
            { name: "padding", type: WebGPU.Types.f32 }, // padding
        ];
        this.uniformsHorizontal = new WebGPU.Uniforms(device, uniformBufferAttributes);
        this.uniformsHorizontal.setValueFromName("direction", [1, 0]);
        this.uniformsHorizontal.uploadToGPU();

        this.uniformsVertical = new WebGPU.Uniforms(device, uniformBufferAttributes);
        this.uniformsVertical.setValueFromName("direction", [0, 1]);
        this.uniformsVertical.uploadToGPU();

        this.pipeline = this.device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(this.device, {
                    code: ShaderSources.Rendering.Spheres.Blur,
                    structs: [this.uniformsHorizontal],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Blur.WORKGROUP_SIZE,
                }
            }
        });

        this.setDeferredTextures(data);
    }

    public compute(commandEncoder: GPUCommandEncoder, compression: number): void {
        if (!this.bindgroupHorizontal || !this.bindgroupVertical) {
            throw new Error();
        }

        this.computeBlurFactors(compression);

        const width = this.temporaryTexture.getWidth();
        const height = this.temporaryTexture.getHeight();

        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroupHorizontal);
        computePass.dispatchWorkgroups(
            Math.ceil(width / Blur.USEFUL_WORKGROUP_SIZE),
            height
        );

        computePass.setBindGroup(0, this.bindgroupVertical);
        computePass.dispatchWorkgroups(
            Math.ceil(height / Blur.USEFUL_WORKGROUP_SIZE),
            width
        );
        computePass.end();
    }

    public setDeferredTextures(data: Data): void {
        if (!data.deferredTexture.hasUsage(GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING)) {
            throw new Error("Texture has wrong usage.");
        }
        if (!data.foamTexture.hasUsage(GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING)) {
            throw new Error("Texture has wrong usage.");
        }
        if (data.deferredTexture.format !== "rgba8unorm" || this.temporaryTexture.format !== "rgba8unorm") {
            throw new Error("Texture has wrong format.");
        }
        if (data.foamTexture.format !== "rgba8unorm" || this.temporaryFoamTexture.format !== "rgba8unorm") {
            throw new Error("Texture has wrong format.");
        }

        if (data.foamTexture.getWidth() !== data.deferredTexture.getWidth() || data.foamTexture.getHeight() !== data.deferredTexture.getHeight()) {
            throw new Error();
        }

        const width = data.deferredTexture.getWidth();
        const height = data.deferredTexture.getHeight();
        this.temporaryTexture.setSize(width, height);
        this.temporaryFoamTexture.setSize(width, height);

        const deferredTextureView = data.deferredTexture.getView();
        const deferredFoamTextureView = data.foamTexture.getView();
        const temporaryTextureView = this.temporaryTexture.getView();
        const temporaryFoamTextureView = this.temporaryFoamTexture.getView();
        const layout = this.pipeline.getBindGroupLayout(0);
        this.bindgroupHorizontal = this.device.createBindGroup({
            layout,
            entries: [
                {
                    binding: 0,
                    resource: deferredTextureView,
                }, {
                    binding: 1,
                    resource: deferredFoamTextureView,
                }, {
                    binding: 2,
                    resource: temporaryTextureView,
                }, {
                    binding: 3,
                    resource: temporaryFoamTextureView,
                }, {
                    binding: 4,
                    resource: this.uniformsHorizontal.bindingResource,
                }
            ]
        });
        this.bindgroupVertical = this.device.createBindGroup({
            layout,
            entries: [
                {
                    binding: 0,
                    resource: temporaryTextureView,
                }, {
                    binding: 1,
                    resource: temporaryFoamTextureView,
                }, {
                    binding: 2,
                    resource: deferredTextureView,
                }, {
                    binding: 3,
                    resource: deferredFoamTextureView,
                }, {
                    binding: 4,
                    resource: this.uniformsVertical.bindingResource,
                }
            ]
        });
    }

    private computeBlurFactors(compression: number): void {
        const factors: number[] = [];

        const sigma = 4;
        const prefix = 1 / (Math.sqrt(2 * Math.PI) * sigma);
        let sum = 0;
        for (let i = 0; i <= Blur.BLUR_RADIUS; i++) {
            const x = i / compression;
            const result = prefix * Math.exp(-0.5 * x * x / (2 * sigma * sigma));
            factors.push(result);
            sum += (i === 0) ? result : 2 * result;
        }
        for (let i = 0; i < factors.length; i++) {
            factors[i]! /= sum;
        }

        factors.forEach((factor: number, index: number) => {
            this.uniformsHorizontal.setValueFromName(`blurFactors_${index}`, factor);
            this.uniformsVertical.setValueFromName(`blurFactors_${index}`, factor);
        })
        this.uniformsHorizontal.uploadToGPU();
        this.uniformsVertical.uploadToGPU();
    }
}

export {
    Blur,
};


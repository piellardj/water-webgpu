import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

type Data = {
    readonly deferredTexture: WebGPU.Texture
    readonly foamTexture: WebGPU.Texture
};

class Blur {
    private static readonly WORKGROUP_SIZE = 256;
    private static readonly BLUR_RADIUS = 6;
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

    public compute(commandEncoder: GPUCommandEncoder): void {
        if (!this.bindgroupHorizontal || !this.bindgroupVertical) {
            throw new Error();
        }

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
}

export {
    Blur,
};


import * as ShaderSources from "../../shader-sources";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

class Blur {
    private static readonly WORKGROUP_SIZE = 256;
    private static readonly BLUR_RADIUS = 6;
    private static readonly USEFUL_WORKGROUP_SIZE = Blur.WORKGROUP_SIZE - (2 * Blur.BLUR_RADIUS);

    private readonly device: GPUDevice;
    private readonly temporaryTexture: WebGPU.Texture;
    private readonly pipeline: GPUComputePipeline;
    private readonly uniformsBufferHorizontal: WebGPU.Uniforms;
    private readonly uniformsBufferVertical: WebGPU.Uniforms;
    private bindgroupHorizontal: GPUBindGroup | null = null;
    private bindgroupVertical: GPUBindGroup | null = null;

    public constructor(device: GPUDevice, deferredTexture: WebGPU.Texture) {
        this.device = device;

        this.temporaryTexture = new WebGPU.Texture(device, "rgba8unorm", GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);

        this.pipeline = this.device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(this.device, { code: ShaderSources.Rendering.Spheres.Blur }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Blur.WORKGROUP_SIZE,
                }
            }
        });

        this.uniformsBufferHorizontal = new WebGPU.Uniforms(device, [
            { name: "direction", type: WebGPU.Types.vec2I32 },
        ]);
        this.uniformsBufferHorizontal.setValueFromName("direction", [1, 0]);
        this.uniformsBufferHorizontal.uploadToGPU();
        this.uniformsBufferVertical = new WebGPU.Uniforms(device, [
            { name: "direction", type: WebGPU.Types.vec2I32 },
        ]);
        this.uniformsBufferVertical.setValueFromName("direction", [0, 1]);
        this.uniformsBufferVertical.uploadToGPU();
        this.setDeferredTexture(deferredTexture);
    }

    public compute(commandEncoder: GPUCommandEncoder): void {
        if (!this.bindgroupHorizontal || !this.bindgroupVertical) {
            throw new Error();
        }

        const height = this.temporaryTexture.getHeight();
        const width = this.temporaryTexture.getWidth();

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

    public setDeferredTexture(deferredTexture: WebGPU.Texture): void {
        if (!deferredTexture.hasUsage(GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING)) {
            throw new Error("Texture has wrong usage.");
        }
        if (deferredTexture.format !== "rgba8unorm" || this.temporaryTexture.format !== "rgba8unorm") {
            throw new Error("Texture has wrong format.");
        }

        this.temporaryTexture.setSize(deferredTexture.getWidth(), deferredTexture.getHeight());

        const deferredTextureView = deferredTexture.getView();
        const temporaryTextureView = this.temporaryTexture.getView();
        const layout = this.pipeline.getBindGroupLayout(0);
        this.bindgroupHorizontal = this.device.createBindGroup({
            layout,
            entries: [
                {
                    binding: 0,
                    resource: deferredTextureView,
                }, {
                    binding: 1,
                    resource: temporaryTextureView,
                }, {
                    binding: 2,
                    resource: this.uniformsBufferHorizontal.bindingResource,
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
                    resource: deferredTextureView,
                }, {
                    binding: 2,
                    resource: this.uniformsBufferVertical.bindingResource,
                }
            ]
        });
    }
}

export {
    Blur,
};


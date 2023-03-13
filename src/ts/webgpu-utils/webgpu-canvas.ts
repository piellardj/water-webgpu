import { Texture } from "./texture/texture";
import * as WebGPU from "./webgpu-device";

class WebGPUCanvas {
    private readonly devicePixelRatio: number;
    private readonly context: GPUCanvasContext;
    private readonly canvasConfiguration: GPUCanvasConfiguration;

    public readonly textureFormat: GPUTextureFormat;
    public readonly clearColor: GPUColorDict;

    private readonly depthTexture: Texture;

    public constructor(private readonly canvas: HTMLCanvasElement) {
        this.devicePixelRatio = window.devicePixelRatio;

        {
            const contextName = "webgpu";
            const context = canvas.getContext(contextName);
            if (!context) {
                throw new Error(`Failed to get a '${contextName}' context from canvas.`);
            }
            this.context = context;
        }

        const device = WebGPU.device;
        if (!device) {
            throw new Error("No GPU device");
        }
        this.canvasConfiguration = {
            device,
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
            alphaMode: "opaque",
            // no "size" attribute to use the canvas' width and height
        };
        this.context.configure(this.canvasConfiguration);
        this.depthTexture = new Texture(device, "depth16unorm", GPUTextureUsage.RENDER_ATTACHMENT);
        
        this.textureFormat = this.canvasConfiguration.format;
        this.clearColor = { r: 0, g: 0, b: 0, a: 1 };
        
        this.adjustSize();
    }

    public get aspectRatio(): number {
        return this.width / this.height;
    }

    public get device(): GPUDevice {
        return this.canvasConfiguration.device;
    }

    public get width(): number {
        return this.canvas.width;
    }

    public get height(): number {
        return this.canvas.height;
    }

    public get depthTextureFormat(): GPUTextureFormat {
        return this.depthTexture.format;
    }

    public setClearColor(color: [number, number, number, number]): void {
        this.clearColor.r = color[0];
        this.clearColor.g = color[1];
        this.clearColor.b = color[2];
        this.clearColor.a = color[3];
    }

    public adjustSize(): void {
        const actualWidth = Math.floor(this.devicePixelRatio * this.canvas.clientWidth);
        const actualHeight = Math.floor(this.devicePixelRatio * this.canvas.clientHeight);

        if (this.canvas.width !== actualWidth || this.canvas.height !== actualHeight) {
            this.canvas.width = actualWidth;
            this.canvas.height = actualHeight;

            this.depthTexture.setSize(this.canvas.width, this.canvas.height);
        }
    }

    public beginRenderPass(commandEncoder: GPUCommandEncoder): GPURenderPassEncoder {
        const renderPassDescriptor = this.getRenderPassDescriptor();
        const renderPassEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        renderPassEncoder.setViewport(0, 0, this.width, this.height, 0, 1);
        renderPassEncoder.setScissorRect(0, 0, this.width, this.height);
        return renderPassEncoder;
    }

    private getRenderPassDescriptor(): GPURenderPassDescriptor {
        return {
            colorAttachments: [{
                view: this.context.getCurrentTexture().createView(),
                clearValue: this.clearColor,
                loadOp: "clear",
                storeOp: "store",
            }],
            depthStencilAttachment: {
                view: this.depthTexture.getView(),
                depthClearValue: 1,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                stencilReadOnly: true,
            },
        };
    }
}

export {
    WebGPUCanvas,
};


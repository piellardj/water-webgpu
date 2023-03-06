import { Renderer } from "./rendering/renderer";
import { FrameCounter } from "./ui/frame-counter";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";
import * as WebGPU from "./webgpu-utils/webgpu-device";

function main(device: GPUDevice, canvas: HTMLCanvasElement, _canvasContainer: HTMLElement): void {
    const webgpuCanvas = new WebGPUCanvas(canvas);
    const renderer = new Renderer(webgpuCanvas);
    const framesCounter = new FrameCounter();
    framesCounter.onChange = (fps: number) => Page.Canvas.setIndicatorText("average-fps", `${fps.toFixed()} fps`);

    function mainLoop(): void {
        framesCounter.registerFrame();

        webgpuCanvas.setClearColor(Parameters.backgroundColor);
        webgpuCanvas.adjustSize();

        const commandEncoder = device.createCommandEncoder();
        renderer.draw(commandEncoder);
        device.queue.submit([commandEncoder.finish()]);

        requestAnimationFrame(mainLoop);
    }

    requestAnimationFrame(mainLoop);
}

async function initialize(): Promise<void> {
    const canvasElement = Page.Canvas.getCanvas();
    const canvasContainer = Page.Canvas.getCanvasContainer();
    if (!canvasElement || !canvasContainer) {
        throw new Error("Could not find canvas on page.");
    }

    const device = await WebGPU.initialize();
    if (!device) {
        throw new Error("No GPU device.");
    }
    main(device, canvasElement, canvasContainer);
}

initialize();

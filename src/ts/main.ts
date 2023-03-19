import { Camera } from "./rendering/camera";
import { Scene } from "./scene";
import { FrameCounter } from "./ui/frame-counter";
import * as Indicators from "./ui/indicators";
import { Parameters } from "./ui/parameters";
import * as WebGPU from "./webgpu-utils/webgpu-utils";

function main(device: GPUDevice, canvas: HTMLCanvasElement, _canvasContainer: HTMLElement): void {
    const webgpuCanvas = new WebGPU.Canvas(canvas);
    const camera = new Camera();
    const scene = new Scene(webgpuCanvas, {
        spheresRadius: Parameters.spheresRadius,
    });

    const framesCounter = new FrameCounter();
    framesCounter.onChange = Indicators.setAverageFps;

    Parameters.onResetObservers.push(() => scene.reinitialize());

    Parameters.onSphereSizeChange.push(() => scene.setSpheresSize(Parameters.spheresRadius));

    function mainLoop(): void {
        framesCounter.registerFrame();

        webgpuCanvas.setClearColor(Parameters.backgroundColor);
        webgpuCanvas.adjustSize();
        scene.setCanvasSize(webgpuCanvas.width, webgpuCanvas.height);

        const commandEncoder = device.createCommandEncoder();

        if (Parameters.paused) {
            scene.update(commandEncoder, 0);
        } else {
            const timestep = Parameters.timestep;
            for (let i = Parameters.stepsPerFrame; i > 0; i--) {
                scene.update(commandEncoder, timestep);
            }
        }

        scene.render(commandEncoder, camera.viewData);
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

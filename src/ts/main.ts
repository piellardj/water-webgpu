import { Camera } from "./rendering/camera";
import { Scene } from "./scene";
import { Counter } from "./ui/counter";
import * as Indicators from "./ui/indicators";
import { Parameters } from "./ui/parameters";
import * as WebGPU from "./webgpu-utils/webgpu-utils";

function main(device: GPUDevice, canvas: HTMLCanvasElement): void {
    WebGPU.Uniforms.tryToOptimize = Parameters.isInDebug;

    const webgpuCanvas = new WebGPU.Canvas(canvas);
    const camera = new Camera();
    const scene = new Scene(webgpuCanvas, {
        spheresRadius: Parameters.particlesRadius,
        obstacle: Parameters.obstacleType,
        particlesQuantity: Parameters.particlesQuantity,
    });

    const framesCounter = new Counter();
    framesCounter.onChange = Indicators.setAverageFps;

    const iterationsCounter = new Counter();
    iterationsCounter.onChange = Indicators.setAverageIps;

    Parameters.onParticlesQuantityChange.push(() => scene.setParticlesQuantity(Parameters.particlesQuantity));
    Parameters.onParticlesRadiusChange.push(() => scene.setParticlesRadius(Parameters.particlesRadius));
    Parameters.onParticlesResetObservers.push(() => scene.reinitialize());
    Parameters.onDomainResetObservers.push(() => scene.reinitializeDomain());
    Parameters.onObstacleChange.push(() => scene.setObstacle(Parameters.obstacleType));

    function mainLoop(): void {
        framesCounter.register();

        webgpuCanvas.setClearColor(Parameters.renderBackgroundColor);
        webgpuCanvas.adjustSize();
        scene.setCanvasSize(webgpuCanvas.width, webgpuCanvas.height);

        const commandEncoder = device.createCommandEncoder();

        if (Parameters.enginePaused) {
            scene.update(commandEncoder, 0);
        } else {
            const timestep = Parameters.engineTimestep;
            for (let i = Parameters.engineStepsPerFrame; i > 0; i--) {
                scene.update(commandEncoder, timestep);
                iterationsCounter.register();
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
    if (!canvasElement) {
        throw new Error("Could not find canvas on page.");
    }

    const device = await WebGPU.initialize();
    if (!device) {
        throw new Error("No GPU device.");
    }
    main(device, canvasElement);
}

initialize();

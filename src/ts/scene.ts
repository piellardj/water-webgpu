import * as glMatrix from "gl-matrix";
import { Axes } from "./rendering/axes";
import { Camera } from "./rendering/camera";
import { Cube } from "./rendering/cube";
import { Spheres } from "./rendering/spheres";
import { ViewData } from "./rendering/view-data";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";

class Scene {
    private readonly webgpuCanvas: WebGPUCanvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly axes: Axes;
    private readonly cube: Cube;
    private readonly spheres: Spheres;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;
        this.axes = new Axes(webgpuCanvas);
        this.cube = new Cube(webgpuCanvas, this.modelMatrix);
        this.spheres = new Spheres(webgpuCanvas, this.modelMatrix);

        glMatrix.mat4.identity(this.modelMatrix);
    }

    public render(commandEncoder: GPUCommandEncoder, camera: Camera): void {
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        const viewData: ViewData = {
            vpMatrix: camera.buildVPMatrix(this.webgpuCanvas.aspectRatio),
            cameraUp: camera.viewUpWorldspace,
            cameraRight: camera.viewRightWorldspace,
        };

        if (Parameters.showAxes) {
            this.axes.render(renderpassEncoder, viewData);
        }
        if (Parameters.showDomain) {
            this.cube.render(renderpassEncoder, viewData);
        }
        if (Parameters.showSpheres) {
            const radius = 0.1 * Parameters.spheresRadiusFactor;
            this.spheres.render(renderpassEncoder, viewData, radius);
        }

        renderpassEncoder.end();
    }
}

export {
    Scene,
};


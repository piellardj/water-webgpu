import * as glMatrix from "gl-matrix";
import { Engine } from "./engine/engine";
import { AxesRenderer } from "./rendering/axes-renderer";
import { ViewData } from "./rendering/camera";
import { CubeRenderer } from "./rendering/cube-renderer";
import { MeshRenderer } from "./rendering/mesh-renderer";
import { SpheresRenderer } from "./rendering/spheres-renderer";
import { Parameters } from "./ui/parameters";
import { WebGPUCanvas } from "./webgpu-utils/webgpu-canvas";

class Scene {
    private readonly webgpuCanvas: WebGPUCanvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly engine: Engine;

    private readonly axesRenderer: AxesRenderer;
    private readonly cubeRenderer: CubeRenderer;
    private readonly spheresRenderer: SpheresRenderer;
    private readonly meshRenderer: MeshRenderer;

    public constructor(webgpuCanvas: WebGPUCanvas) {
        this.webgpuCanvas = webgpuCanvas;

        this.engine = new Engine(webgpuCanvas.device);

        this.axesRenderer = new AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new CubeRenderer(webgpuCanvas, this.modelMatrix);
        this.spheresRenderer = new SpheresRenderer(webgpuCanvas, this.modelMatrix);
        this.meshRenderer = new MeshRenderer(webgpuCanvas, this.engine.mesh, this.modelMatrix);

        glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData): void {
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        if (Parameters.showAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showDomain) {
            this.cubeRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showSpheres) {
            this.spheresRenderer.render(renderpassEncoder, viewData, this.engine.spheresData);
        }
        if (Parameters.showMesh) {
            this.meshRenderer.render(renderpassEncoder, viewData);
        }

        renderpassEncoder.end();
    }
}

export {
    Scene,
};


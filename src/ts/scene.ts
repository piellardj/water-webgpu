import * as glMatrix from "gl-matrix";
import { Engine } from "./engine/engine";
import { AxesRenderer } from "./rendering/axes-renderer";
import { ViewData } from "./rendering/camera";
import { CubeRenderer } from "./rendering/cube-renderer";
import { GridCellsByPopulationRenderer } from "./rendering/grid-cells-by-population-renderer";
import { GridCellsRenderer } from "./rendering/grid-cells-renderer";
import { MeshRenderer } from "./rendering/mesh-renderer";
import { SpheresRenderer } from "./rendering/spheres/spheres-renderer";
import * as Indicators from "./ui/indicators";
import { EGridDisplayMode, Parameters } from "./ui/parameters";
import * as WebGPU from "./webgpu-utils/webgpu-utils";

class Scene {
    private readonly webgpuCanvas: WebGPU.Canvas;
    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly engine: Engine;

    private readonly axesRenderer: AxesRenderer;
    private readonly cubeRenderer: CubeRenderer;
    private readonly spheresRenderer: SpheresRenderer;
    private readonly obstacleMeshRenderer: MeshRenderer;
    private readonly gridCellsRenderer: GridCellsRenderer;
    private gridCellsPerPopulationRenderer: GridCellsByPopulationRenderer | null = null;

    public constructor(webgpuCanvas: WebGPU.Canvas) {
        this.webgpuCanvas = webgpuCanvas;

        this.engine = new Engine(webgpuCanvas.device);

        this.axesRenderer = new AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new CubeRenderer(webgpuCanvas, this.modelMatrix);
        this.spheresRenderer = new SpheresRenderer(webgpuCanvas, this.modelMatrix, this.engine.spheresData);
        this.obstacleMeshRenderer = new MeshRenderer(webgpuCanvas, this.modelMatrix, this.engine.obstaclesMesh);
        this.gridCellsRenderer = new GridCellsRenderer(webgpuCanvas, this.modelMatrix);

        Indicators.setParticlesCount(this.engine.spheresData.count);
        Indicators.setGridSize(this.engine.gridCellsData.gridSize);

        glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
    }

    public update(commandEncoder: GPUCommandEncoder, dt: number): void {
        this.engine.compute(commandEncoder, dt);
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData): void {
        // const now = 0.0003 * performance.now();
        // glMatrix.mat4.fromXRotation(this.modelMatrix, -Math.PI / 2 -now);
        // glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
        // this.uniforms.setValueFromName("gravity", [0, Parameters.gravity * Math.cos(now), Parameters.gravity * Math.sin(now)]);


        if (Parameters.showSpheres) {
            this.spheresRenderer.renderDeferred(commandEncoder, viewData);
        }

        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        if (Parameters.showAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showDomain) {
            this.cubeRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showObstacleMesh) {
            this.obstacleMeshRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showSpheres) {
            this.spheresRenderer.renderComposition(renderpassEncoder, viewData);
        }

        switch (Parameters.showGridCells) {
            case EGridDisplayMode.FINAL:
                this.gridCellsRenderer.render(renderpassEncoder, viewData, this.engine.gridCellsData);
                break;
            case EGridDisplayMode.COLOR_BY_POPULATION:
                if (!this.gridCellsPerPopulationRenderer) {
                    this.gridCellsPerPopulationRenderer = new GridCellsByPopulationRenderer(this.webgpuCanvas, this.modelMatrix, this.engine.gridCellsDebugData);
                }
                this.gridCellsPerPopulationRenderer.render(renderpassEncoder, viewData);
                break;
        }
        renderpassEncoder.end();
    }

    public reset(): void {
        this.engine.reset();
    }

    public setSize(width: number, height: number): boolean {
        return this.spheresRenderer.setSize(width, height);
    }
}

export {
    Scene,
};


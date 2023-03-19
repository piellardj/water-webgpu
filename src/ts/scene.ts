import * as glMatrix from "gl-matrix";
import { Engine } from "./engine/engine";
import { AxesRenderer } from "./rendering/axes-renderer";
import { ViewData } from "./rendering/camera";
import { CubeRenderer } from "./rendering/cube-renderer";
import { GridCellsByPopulationRenderer } from "./rendering/grid-cells-by-population-renderer";
import { GridCellsRenderer } from "./rendering/grid-cells-renderer";
import { MeshRenderable } from "./rendering/mesh/mesh-renderable";
import { MeshRenderer } from "./rendering/mesh/mesh-renderer";
import { SpheresRenderer } from "./rendering/spheres/spheres-renderer";
import * as Indicators from "./ui/indicators";
import { EGridDisplayMode, EObstacleType, Parameters } from "./ui/parameters";
import * as WebGPU from "./webgpu-utils/webgpu-utils";

class Scene {
    private readonly webgpuCanvas: WebGPU.Canvas;

    private readonly modelMatrix: glMatrix.mat4 = glMatrix.mat4.create();
    private readonly mvpMatrix: glMatrix.mat4 = glMatrix.mat4.create();

    private readonly engine: Engine;

    private readonly axesRenderer: AxesRenderer;
    private readonly cubeRenderer: CubeRenderer;
    private readonly spheresRenderer: SpheresRenderer;
    private readonly gridCellsRenderer: GridCellsRenderer;
    private readonly gridCellsPerPopulationRenderer: GridCellsByPopulationRenderer;

    private readonly meshRenderer: MeshRenderer;
    private readonly particlesMeshes: MeshRenderable[] = [];
    private readonly obstacleMeshes: MeshRenderable[] = [];

    public constructor(webgpuCanvas: WebGPU.Canvas) {
        this.webgpuCanvas = webgpuCanvas;

        this.engine = new Engine(webgpuCanvas.device);

        this.axesRenderer = new AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new CubeRenderer(webgpuCanvas);
        this.spheresRenderer = new SpheresRenderer(webgpuCanvas, this.engine.spheresBufferDescriptor);
        this.meshRenderer = new MeshRenderer(webgpuCanvas);
        this.gridCellsRenderer = new GridCellsRenderer(webgpuCanvas);
        this.gridCellsPerPopulationRenderer = new GridCellsByPopulationRenderer(this.webgpuCanvas, this.engine.cellBufferDescriptor);

        this.particlesMeshes.push(this.meshRenderer.createMeshRenderable(this.engine.particlesInitialMesh));
        this.obstacleMeshes.push(this.meshRenderer.createMeshRenderable(this.engine.obstaclesMesh));

        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }

    public update(commandEncoder: GPUCommandEncoder, dt: number): void {
        this.engine.compute(commandEncoder, dt);
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData): void {
        glMatrix.mat4.fromTranslation(this.modelMatrix, [-0.5, -0.5, -0.5]);
        // const now = 0.0003 * performance.now();
        // glMatrix.mat4.fromXRotation(this.modelMatrix, -Math.PI / 2 -now);
        // glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
        // this.uniforms.setValueFromName("gravity", [0, Parameters.gravity * Math.cos(now), Parameters.gravity * Math.sin(now)]);

        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.modelMatrix);

        if (Parameters.showSpheres) {
            this.spheresRenderer.renderDeferred(commandEncoder, viewData, {
                mvpMatrix: this.mvpMatrix,
                gpuBuffer: this.engine.spheresBuffer.gpuBuffer,
                instancesCount: this.engine.spheresBuffer.instancesCount,
                sphereRadius: this.engine.spheresBuffer.sphereRadius,
                maxDisplayedWeight: Engine.getMaxWeight(Parameters.showObstacleSpheres),
            });
        }

        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        if (Parameters.showAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.showDomain) {
            this.cubeRenderer.render(renderpassEncoder, {
                mvpMatrix: this.mvpMatrix,
            });
        }

        {
            const renderableMeshes: MeshRenderable[] = [];
            if (Parameters.showObstacleMesh) {
                renderableMeshes.push(...this.obstacleMeshes);
            }
            if (Parameters.showParticlesMesh) {
                renderableMeshes.push(...this.particlesMeshes);
            }
            this.meshRenderer.render(renderpassEncoder, {
                meshes: renderableMeshes,
                mvpMatrix: this.mvpMatrix,
                modelMatrix: this.modelMatrix,
            });
        }

        if (Parameters.showSpheres) {
            this.spheresRenderer.renderComposition(renderpassEncoder, viewData);
        }

        switch (Parameters.showGridCells) {
            case EGridDisplayMode.FINAL:
                this.gridCellsRenderer.render(renderpassEncoder, {
                    mvpMatrix: this.mvpMatrix,
                    buffers: this.engine.nonEmptyCellsBuffers,
                    gridData: this.engine.gridData,
                });
                break;
            case EGridDisplayMode.COLOR_BY_POPULATION:
                this.gridCellsPerPopulationRenderer.render(renderpassEncoder, {
                    mvpMatrix: this.mvpMatrix,
                    gpuBuffer: this.engine.cellsBufferData.gpuBuffer,
                    gridData: this.engine.gridData,
                });
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


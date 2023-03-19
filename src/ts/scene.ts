import * as glMatrix from "gl-matrix";
import { Engine } from "./engine/engine";
import { Mesh } from "./engine/initial-conditions/models/mesh";
import * as Models from "./engine/initial-conditions/models/models";
import { AxesRenderer } from "./rendering/axes-renderer";
import { ViewData } from "./rendering/camera";
import { CubeRenderer } from "./rendering/cube-renderer";
import { GridCellsByPopulationRenderer } from "./rendering/grid-cells-by-population-renderer";
import { GridCellsRenderer } from "./rendering/grid-cells-renderer";
import { MeshRenderable } from "./rendering/mesh/mesh-renderable";
import { MeshRenderer } from "./rendering/mesh/mesh-renderer";
import { SpheresRenderer } from "./rendering/spheres/spheres-renderer";
import * as Indicators from "./ui/indicators";
import { EAnimationType, EGridDisplayMode, EObstacleType, Parameters } from "./ui/parameters";
import * as WebGPU from "./webgpu-utils/webgpu-utils";

type Data = {
    spheresRadius: number;
    obstacle: EObstacleType;
};

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

    private particlesContainerMesh: Mesh;
    private obstaclesMesh: Mesh | null = null;

    private readonly meshRenderer: MeshRenderer;
    private readonly particlesMeshes: MeshRenderable[] = [];
    private readonly obstacleMeshes: MeshRenderable[] = [];

    private rotationPeriod: number = 0;
    private contractionPeriod: number = 0;

    public constructor(webgpuCanvas: WebGPU.Canvas, data: Data) {
        this.webgpuCanvas = webgpuCanvas;

        this.axesRenderer = new AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new CubeRenderer(webgpuCanvas);
        this.spheresRenderer = new SpheresRenderer(webgpuCanvas, Engine.spheresBufferDescriptor);
        this.meshRenderer = new MeshRenderer(webgpuCanvas);
        this.gridCellsRenderer = new GridCellsRenderer(webgpuCanvas);
        this.gridCellsPerPopulationRenderer = new GridCellsByPopulationRenderer(this.webgpuCanvas, Engine.cellBufferDescriptor);

        this.particlesContainerMesh = Mesh.load(Models.Shapes);
        this.particlesMeshes.push(this.meshRenderer.createMeshRenderable(this.particlesContainerMesh));

        this.obstaclesMesh = Scene.loadObstacleMesh(data.obstacle);
        if (this.obstaclesMesh) {
            this.obstacleMeshes.push(this.meshRenderer.createMeshRenderable(this.obstaclesMesh));
        }

        this.engine = new Engine(webgpuCanvas.device, {
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: data.spheresRadius
        });
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }

    public update(commandEncoder: GPUCommandEncoder, dt: number): void {
        const animation = Parameters.domainAnimation;
        if (animation === EAnimationType.ROTATION) {
            this.rotationPeriod += 0.2 * dt;
            Parameters.domainRotation = this.rotationPeriod;
        } else {
            this.rotationPeriod = Parameters.domainRotation;
            if (animation === EAnimationType.CONTRACT) {
                this.contractionPeriod += 0.4 * dt;
                Parameters.domainContraction = 0.2 + 0.8 * (0.5 + 0.5 * Math.cos(this.contractionPeriod));
            }
        }

        const rotation = Parameters.domainRotation;
        const gravity: glMatrix.vec3 = [0, Parameters.gravity * Math.cos(rotation), Parameters.gravity * Math.sin(rotation)];
        this.engine.compute(commandEncoder, dt, gravity);
    }

    public render(commandEncoder: GPUCommandEncoder, viewData: ViewData): void {
        glMatrix.mat4.fromXRotation(this.modelMatrix, -Math.PI / 2 - Parameters.domainRotation);
        glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.modelMatrix);

        if (Parameters.showSpheres) {
            this.spheresRenderer.renderDeferred(commandEncoder, viewData, {
                modelMatrix: this.modelMatrix,
                gpuBuffer: this.engine.spheresBuffer.gpuBuffer,
                instancesCount: this.engine.spheresBuffer.instancesCount,
                sphereRadius: this.engine.spheresBuffer.sphereRadius,
                maxDisplayedWeight: Engine.getMaxWeight(Parameters.obstacleDisplayAsSpheres),
            });
        }

        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);

        if (Parameters.showAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (Parameters.domainDisplay) {
            this.cubeRenderer.render(renderpassEncoder, {
                mvpMatrix: this.mvpMatrix,
                proportions: [1, 1, Parameters.domainContraction],
            });
        }

        {
            const renderableMeshes: MeshRenderable[] = [];
            if (Parameters.obstacleDisplayAsMesh) {
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
                    gpuBuffer: this.engine.cellsBufferData.cellsBuffer.gpuBuffer,
                    gridData: this.engine.gridData,
                });
                break;
        }
        renderpassEncoder.end();
    }

    public reinitialize(): void {
        this.engine.reinitialize();
        this.reinitializeDomain();
    }

    public reinitializeDomain(): void {
        this.rotationPeriod = 0;
        this.contractionPeriod = 0;
        Parameters.domainRotation = this.rotationPeriod;
        Parameters.domainContraction = 1;
    }

    public setSpheresSize(size: number): void {
        this.engine.reset({
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: size,
        });
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }

    public setObstacle(obstacle: EObstacleType): void {
        for (const renderableMesh of this.obstacleMeshes) {
            renderableMesh.free();
        }
        this.obstacleMeshes.length = 0;

        this.obstaclesMesh = Scene.loadObstacleMesh(obstacle);
        if (this.obstaclesMesh) {
            this.obstacleMeshes.push(this.meshRenderer.createMeshRenderable(this.obstaclesMesh));
        }

        this.engine.reset({
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: this.engine.spheresBuffer.sphereRadius,
        });
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }

    public setCanvasSize(width: number, height: number): boolean {
        return this.spheresRenderer.setSize(width, height);
    }

    private static loadObstacleMesh(obstacle: EObstacleType): Mesh | null {
        switch (obstacle) {
            case EObstacleType.NONE:
                return null;
            case EObstacleType.CAPSULES:
                return Mesh.load(Models.Capsules);
            default:
                throw new Error();
        }
    }
}

export {
    Scene,
};


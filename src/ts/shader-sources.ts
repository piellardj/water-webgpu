/// <reference types="./webgpu-utils/wgsl-type"/>

import CountParticlesPerCell from "../shaders/engine/indexing/count-particles-per-cell.wgsl";
import RenderCellsByPopulation from "../shaders/engine/indexing/render-cells-by-population.wgsl";
import ResetCells from "../shaders/engine/indexing/reset-cells.wgsl";
import Axes from "../shaders/rendering/axes.wgsl";
import Cube from "../shaders/rendering/cube.wgsl";
import GridCells from "../shaders/rendering/grid-cells.wgsl";
import Mesh from "../shaders/rendering/mesh.wgsl";
import Blur from "../shaders/rendering/spheres/blur.wgsl";
import Composition from "../shaders/rendering/spheres/composition.wgsl";
import Spheres from "../shaders/rendering/spheres/spheres.wgsl";

const engine = {
    Indexing: {
        CountParticlesPerCell,
        RenderCellsByPopulation,
        ResetCells,
    },
};

const rendering = {
    Axes,
    Cube,
    GridCells,
    Mesh,
    Spheres: {
        Blur,
        Composition,
        Spheres,
    },
};

export {
    engine as Engine,
    rendering as Rendering,
};


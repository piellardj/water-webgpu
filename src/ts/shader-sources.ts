/// <reference types="./webgpu-utils/wgsl-type"/>

import CountParticlesPerCell from "../shaders/engine/indexing/count-particles-per-cell.wgsl";
import FinalizePrefixSum from "../shaders/engine/indexing/finalize-prefix-sum.wgsl";
import DownPass from "../shaders/engine/indexing/prefix-sum/down-pass.wgsl";
import Reduce from "../shaders/engine/indexing/prefix-sum/reduce.wgsl";
import PreparePrefixSum from "../shaders/engine/indexing/prepare-prefix-sum.wgsl";
import RenderCellsByPopulation from "../shaders/engine/indexing/render-cells-by-population.wgsl";
import ReorderParticles from "../shaders/engine/indexing/reorder-particles.wgsl";
import ResetCells from "../shaders/engine/indexing/reset-cells.wgsl";

import Acceleration from "../shaders/engine/simulation/acceleration.wgsl";
import Initialization from "../shaders/engine/simulation/initialization.wgsl";
import Integration from "../shaders/engine/simulation/integration.wgsl";

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
        FinalizePrefixSum,
        PreparePrefixSum,
        RenderCellsByPopulation,
        ReorderParticles,
        ResetCells,
        PrefixSum: {
            DownPass,
            Reduce,
        },
    },
    Simulation: {
        Acceleration,
        Initialization,
        Integration,
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

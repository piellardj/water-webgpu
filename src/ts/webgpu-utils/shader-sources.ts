/// <reference types="./wgsl-type"/>

import Axes from "../../shaders/rendering/axes.wgsl";
import Cube from "../../shaders/rendering/cube.wgsl";
import Mesh from "../../shaders/rendering/mesh.wgsl";
import Blur from "../../shaders/rendering/spheres/blur.wgsl";
import Composition from "../../shaders/rendering/spheres/composition.wgsl";
import Spheres from "../../shaders/rendering/spheres/spheres.wgsl";

const rendering = {
    Axes,
    Cube,
    Mesh,
    Spheres: {
        Blur,
        Composition,
        Spheres,
    },
};

export {
    rendering as Rendering,
};


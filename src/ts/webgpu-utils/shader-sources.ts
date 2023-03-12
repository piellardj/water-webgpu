/// <reference types="./wgsl-type"/>

import Axes from "../../shaders/rendering/axes.wgsl";
import Cube from "../../shaders/rendering/cube.wgsl";
import Mesh from "../../shaders/rendering/mesh.wgsl";
import Composition from "../../shaders/rendering/spheres/composition.wgsl";
import Spheres from "../../shaders/rendering/spheres/spheres.wgsl";

const rendering = {
    Axes,
    Cube,
    Mesh,
    Spheres: {
        Composition,
        Spheres,
    },
};

export {
    rendering as Rendering,
};


import * as glMatrix from "gl-matrix";

type ViewData = {
    vpMatrix: glMatrix.ReadonlyMat4;
    cameraUp: glMatrix.ReadonlyVec3;
    cameraRight: glMatrix.ReadonlyVec3;
};

export {
    ViewData,
};


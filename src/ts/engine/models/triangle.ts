import * as glMatrix from "gl-matrix";

function minus(a: glMatrix.ReadonlyVec3, b: glMatrix.ReadonlyVec3): glMatrix.vec3 {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2],
    ];
}
function crossProduct(v1: glMatrix.ReadonlyVec3, v2: glMatrix.ReadonlyVec3): glMatrix.vec3 {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0],
    ];
}
function normalize(v: glMatrix.vec3): void {
    const lengthSquared = glMatrix.vec3.sqrLen(v);
    if (lengthSquared > 0) {
        const length = Math.sqrt(lengthSquared);
        v[0] /= length;
        v[1] /= length;
        v[2] /= length;
    } else {
        v[0] = 1;
        v[1] = 0;
        v[2] = 0;
    }
}

class Triangle {
    public readonly normal: glMatrix.ReadonlyVec3;

    public constructor(
        public readonly p1: glMatrix.ReadonlyVec3,
        public readonly p2: glMatrix.ReadonlyVec3,
        public readonly p3: glMatrix.ReadonlyVec3) {
        const v12 = minus(p2, p1);
        const v13 = minus(p3, p1);
        const normal = crossProduct(v12, v13);
        normalize(normal);
        this.normal = normal;
    }
}

export {
    Triangle,
};


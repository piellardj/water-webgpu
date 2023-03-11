import * as glMatrix from "gl-matrix";
import { Triangle } from "./models/triangle";

type Segment = {
    readonly from: number;
    readonly to: number;
};

enum ERayDirection {
    X,
    Y,
    Z,
}

type Triangle2D = {
    readonly p1: glMatrix.ReadonlyVec2,
    readonly c1: number;
    readonly p2: glMatrix.ReadonlyVec2,
    readonly c2: number;
    readonly p3: glMatrix.ReadonlyVec2,
    readonly c3: number;
};

function minus(a: glMatrix.ReadonlyVec2, b: glMatrix.ReadonlyVec2): glMatrix.vec2 {
    return [
        a[0] - b[0],
        a[1] - b[1],
    ];
}
function dot(a: glMatrix.ReadonlyVec2, b: glMatrix.ReadonlyVec2): number {
    return a[0] * b[0] + a[1] * b[1];
}

/** Computes the barycentric coordinates of a point relatively to the triangle.
 * Only takes into account the X and Y coordinates.
 */
function computeBarycentricXY(triangle: Triangle2D, p: glMatrix.ReadonlyVec2): [number, number, number] {
    const v0 = minus(triangle.p2, triangle.p1);
    const v1 = minus(triangle.p3, triangle.p1);
    const v2 = minus(p, triangle.p1);
    const d00 = dot(v0, v0);
    const d01 = dot(v0, v1);
    const d11 = dot(v1, v1);
    const d20 = dot(v2, v0);
    const d21 = dot(v2, v1);
    const denom = d00 * d11 - d01 * d01;
    const v = (d11 * d20 - d01 * d21) / denom;
    const w = (d00 * d21 - d01 * d20) / denom;
    const u = 1 - v - w;
    return [u, v, w];
}

class RayCaster {
    private readonly triangles2D: ReadonlyArray<Triangle2D>;

    public constructor(direction: ERayDirection, triangles: ReadonlyArray<Triangle>) {
        let coord1: 0 | 1 | 2;
        let coord2: 0 | 1 | 2;
        let selectedCoord: 0 | 1 | 2;
        switch (direction) {
            case ERayDirection.X:
                selectedCoord = 0;
                coord1 = 1;
                coord2 = 2;
                break;
            case ERayDirection.Y:
                coord1 = 0;
                selectedCoord = 1;
                coord2 = 2;
                break;
            case ERayDirection.Z:
                coord1 = 0;
                coord2 = 1;
                selectedCoord = 2;
                break;
        }

        this.triangles2D = triangles.map((triangle: Triangle) => {
            return {
                p1: [triangle.p1[coord1], triangle.p1[coord2]],
                c1: triangle.p1[selectedCoord],
                p2: [triangle.p2[coord1], triangle.p2[coord2]],
                c2: triangle.p2[selectedCoord],
                p3: [triangle.p3[coord1], triangle.p3[coord2]],
                c3: triangle.p3[selectedCoord],
            };
        });
    }

    public computeInternalSegments(rayCoords: glMatrix.ReadonlyVec2): Segment[] {
        const intersections: number[] = [];

        for (const triangle of this.triangles2D) {
            const barycentric = computeBarycentricXY(triangle, rayCoords);
            const rayHitsTriangle = Math.max(...barycentric) < 1 && Math.min(...barycentric) > 0;

            if (rayHitsTriangle) {
                const z = barycentric[0] * triangle.c1 + barycentric[1] * triangle.c2 + barycentric[2] * triangle.c3;
                intersections.push(z);
            }
        }

        // if (intersections.length % 2 !== 0) {
        //     throw new Error(`Invalid intersections length '${intersections.length}'.`);
        // }

        intersections.sort();

        const segments: Segment[] = [];
        for (let i = 0; i + 1 < intersections.length; i += 2) {
            segments.push({
                from: intersections[i]!,
                to: intersections[i + 1]!,
            });
        }
        return segments;
    }
}

export type {
    Segment,
};
export {
    ERayDirection,
    RayCaster,
};


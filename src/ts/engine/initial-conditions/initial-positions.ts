import * as glMatrix from "gl-matrix";
import { ERayDirection, Segment } from "./ray-caster";

type FillableMesh = {
    isInside(point: glMatrix.ReadonlyVec3): boolean;
    getSegments(rayDirection: ERayDirection, rayCoords: glMatrix.ReadonlyVec2): ReadonlyArray<Segment>;
};

function shiftToStart(x: number, stride: number): number {
    while (x >= stride) {
        x -= stride;
    }
    return x;
}

function fillMesh(spheresRadius: number, mesh: FillableMesh): glMatrix.vec3[] {
    const positions: glMatrix.vec3[] = [];

    const strideX = 2 * spheresRadius;
    const strideY = spheresRadius * Math.sqrt(3);
    const strideZ = 2 * spheresRadius * Math.sqrt(6) / 3;
    for (let z = 0, nZ = 0; z < 1; z += strideZ, nZ++) {
        const xShiftFromZ = (nZ % 2 === 0) ? 0 : spheresRadius;
        let startY = 0;
        if (nZ % 4 === 1 || nZ % 4 === 3) {
            startY = Math.sqrt(3) * spheresRadius / 3;
        } else if (nZ % 4 === 2) {
            startY = 2 * Math.sqrt(3) * spheresRadius / 3;
        }
        startY = shiftToStart(startY, strideY);
        for (let y = startY, nY = 0; y < 1; y += strideY, nY++) {
            const xShiftFromY = ((nY + 1) % 2) * spheresRadius;
            const startX = shiftToStart(xShiftFromZ + xShiftFromY, strideX);

            const segments = mesh.getSegments(ERayDirection.X, [y, z]);
            addRow(spheresRadius, strideX, startX, y, z, positions, segments);
        }
    }

    return positions;
}

function addRow(spheresRadius: number, strideX: number, startX: number, y: number, z: number, positions: glMatrix.vec3[], segments: ReadonlyArray<Segment>): void {
    for (let x = startX; x <= 1; x += strideX) {
        const isInDomain = (x >= spheresRadius) && (y >= spheresRadius) && (z >= spheresRadius) && (1 - x >= spheresRadius) && (1 - y >= spheresRadius) && (1 - z >= spheresRadius);
        if (isInDomain) {
            for (const segment of segments) {
                if (segment.from <= x && x <= segment.to) {
                    positions.push([x, y, z]);
                    break;
                }
            }
        }
    }
}

function fullCube(radius: number): glMatrix.vec3[] {
    return fillMesh(radius, {
        isInside: (point: glMatrix.ReadonlyVec3) => Math.max(...point) <= 1 && Math.min(...point) >= 0,
        getSegments: () => {
            return [{ from: 0, to: 1 }];
        },
    });
}

// function sphere(radius: number): glMatrix.vec3[] {
//     return fillMesh(radius, {
//         isInside: (point: glMatrix.ReadonlyVec3) => glMatrix.vec3.sqrDist(point, [0.5, 0.5, 0.5]) <= 0.5 * 0.5,
//     });
// }

export {
    fillMesh,
    fullCube,
    // sphere,
};


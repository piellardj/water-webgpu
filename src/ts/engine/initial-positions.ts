import * as glMatrix from "gl-matrix";
import { Segment } from "./mesh";

function shiftToStart(x: number, stride: number): number {
    while (x >= stride) {
        x -= stride;
    }
    return x;
}

function fullCube(radius: number): glMatrix.vec3[] {
    const positions: glMatrix.vec3[] = [];

    const strideX = 2 * radius;
    const strideY = radius * Math.sqrt(3);
    const strideZ = 2 * radius * Math.sqrt(6) / 3;
    for (let z = 0, nZ = 0; z < 1; z += strideZ, nZ++) {
        const xShiftFromZ = (nZ % 2 === 0) ? 0 : radius;
        let startY = 0;
        if (nZ % 4 === 1 || nZ % 4 === 3) {
            startY = Math.sqrt(3) * radius / 3;
        } else if (nZ % 4 === 2) {
            startY = 2 * Math.sqrt(3) * radius / 3;
        }
        startY = shiftToStart(startY, strideY);
        for (let y = startY, nY = 0; y < 1; y += strideY, nY++) {
            const xShiftFromY = ((nY + 1) % 2) * radius;
            const startX = shiftToStart(xShiftFromZ + xShiftFromY, strideX);

            const segments: Segment[] = [];
            segments.push({ from: 0, to: 1 });
            addRow(strideX, startX, y, z, positions, segments);
        }
    }

    return positions;
}

function addRow(strideX: number, startX: number, y: number, z: number, positions: glMatrix.vec3[], segments: Segment[]): void {
    for (let x = startX; x <= 1; x += strideX) {
        for (const segment of segments) {
            if (segment.from <= x && x <= segment.to) {
                positions.push([x, y, z]);
                break;
            }
        }
    }
}

export {
    fullCube,
};


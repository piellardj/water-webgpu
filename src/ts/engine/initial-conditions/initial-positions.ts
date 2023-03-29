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

class InitialPositions {
    private readonly strideX: number;
    private readonly strideY: number;
    private readonly strideZ: number;

    public constructor(
        private readonly spheresRadius: number,
        private readonly mesh: FillableMesh,
        private readonly restrictToDomain: boolean) {
        this.strideX = 2 * spheresRadius;
        this.strideY = spheresRadius * Math.sqrt(3);
        this.strideZ = 2 * spheresRadius * Math.sqrt(6) / 3;
    }

    public computePositions(): glMatrix.vec3[] {
        const positions: glMatrix.vec3[] = [];

        const startZ = -this.strideZ;
        for (let z = startZ, nZ = 0; z < 1 + this.strideZ; z += this.strideZ, nZ++) {
            const xShiftFromZ = (nZ % 2 === 0) ? 0 : this.spheresRadius;
            let startY = 0;
            if (nZ % 4 === 1 || nZ % 4 === 3) {
                startY = Math.sqrt(3) * this.spheresRadius / 3;
            } else if (nZ % 4 === 2) {
                startY = 2 * Math.sqrt(3) * this.spheresRadius / 3;
            }
            startY = shiftToStart(startY, this.strideY) - this.strideY;
            for (let y = startY, nY = 0; y < 1 + this.strideY; y += this.strideY, nY++) {
                const xShiftFromY = ((nY + 1) % 2) * this.spheresRadius;
                const startX = shiftToStart(xShiftFromZ + xShiftFromY, this.strideX) - this.strideX;

                const segments = this.mesh.getSegments(ERayDirection.X, [y, z]).filter(segment => {
                    return Math.abs(segment.from - segment.to) > 0.001;
                });

                this.addRow(startX, y, z, positions, segments);
            }
        }

        return positions;
    }

    private addRow(startX: number, y: number, z: number, positions: glMatrix.vec3[], segments: ReadonlyArray<Segment>): void {
        for (let x = startX; x <= 1 + this.strideX; x += this.strideX) {
            const isInDomain = !this.restrictToDomain || ((x >= this.spheresRadius) && (y >= this.spheresRadius) && (z >= this.spheresRadius) && (1 - x >= this.spheresRadius) && (1 - y >= this.spheresRadius) && (1 - z >= this.spheresRadius));
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
}

export {
    InitialPositions,
};


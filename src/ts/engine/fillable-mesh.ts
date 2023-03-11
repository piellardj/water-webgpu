import * as glMatrix from "gl-matrix";
import { Triangle } from "./models/triangle";
import { ERayDirection, RayCaster, Segment } from "./ray-caster";

type RegisteredSegments = {
    readonly direction: ERayDirection;
    readonly coords: glMatrix.ReadonlyVec2;
    readonly segments: ReadonlyArray<Segment>;
};

class FillableMesh {
    private readonly rayCasterX: RayCaster;
    private readonly rayCasterY: RayCaster;
    private readonly rayCasterZ: RayCaster;

    private readonly boundingBoxMin: glMatrix.ReadonlyVec3;
    private readonly boundingBoxMax: glMatrix.ReadonlyVec3;

    private registeredSegments: RegisteredSegments[] = [];

    public constructor(triangles: ReadonlyArray<Triangle>) {
        this.rayCasterX = new RayCaster(ERayDirection.X, triangles);
        this.rayCasterY = new RayCaster(ERayDirection.Y, triangles);
        this.rayCasterZ = new RayCaster(ERayDirection.Z, triangles);


        let boundingBoxMin: glMatrix.vec3 = [+100, +100, +100];
        let boundingBoxMax: glMatrix.vec3 = [-100, -100, -100];

        for (const triangle of triangles) {
            for (let i = 0; i < 3; i++) {
                boundingBoxMin[i]! = Math.min(boundingBoxMin[i]!, triangle.p1[i]!, triangle.p2[i]!, triangle.p3[i]!);
                boundingBoxMax[i]! = Math.max(boundingBoxMax[i]!, triangle.p1[i]!, triangle.p2[i]!, triangle.p3[i]!);
            }
        }
        this.boundingBoxMin = boundingBoxMin;
        this.boundingBoxMax = boundingBoxMax;
    }

    public isInside(point: glMatrix.ReadonlyVec3): boolean {
        for (let i = 0; i < 3; i++) {
            if (point[i]! < this.boundingBoxMin[i]! || point[i]! > this.boundingBoxMax[i]!) {
                return false;
            }
        }

        return this.isInsideAccordingToProjection(ERayDirection.X, [point[1], point[2]], point[0]) &&
            this.isInsideAccordingToProjection(ERayDirection.Y, [point[0], point[2]], point[1]) &&
            this.isInsideAccordingToProjection(ERayDirection.Z, [point[0], point[1]], point[2]);
    }

    public getSegments(rayDirection: ERayDirection, rayCoords: glMatrix.ReadonlyVec2): ReadonlyArray<Segment> {
        let segments: ReadonlyArray<Segment>;

        const registeredSegment = this.registeredSegments.find(registeredSegment => {
            return registeredSegment.direction === rayDirection &&
                registeredSegment.coords[0] === rayCoords[0] &&
                registeredSegment.coords[1] === rayCoords[1];
        });
        if (registeredSegment) {
            segments = registeredSegment.segments;
        } else {
            if (rayDirection === ERayDirection.X) {
                segments = this.rayCasterX.computeInternalSegments(rayCoords);
            } else if (rayDirection === ERayDirection.Y) {
                segments = this.rayCasterY.computeInternalSegments(rayCoords);
            } else {
                segments = this.rayCasterZ.computeInternalSegments(rayCoords);
            }
            this.registeredSegments.push({
                direction: rayDirection,
                coords: rayCoords,
                segments,
            });
        }

        return segments;
    }

    private isInsideAccordingToProjection(rayDirection: ERayDirection, rayCoords: glMatrix.ReadonlyVec2, depth: number): boolean {
        const segments = this.getSegments(rayDirection, rayCoords);

        for (const segment of segments) {
            if (segment.from <= depth && depth <= segment.to) {
                return true;
            }
        }
        return false;
    }
}

export {
    FillableMesh,
};


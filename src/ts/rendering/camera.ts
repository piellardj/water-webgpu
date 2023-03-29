/// <reference types="../page-interface-generated" />

import * as glMatrix from "gl-matrix";
import { EProjection, Parameters } from "../ui/parameters";

type ViewData = {
    vMatrix: glMatrix.ReadonlyMat4;
    pMatrix: glMatrix.ReadonlyMat4;
    vpMatrix: glMatrix.ReadonlyMat4;
    cameraPosition: glMatrix.ReadonlyVec3;
    cameraUp: glMatrix.ReadonlyVec3;
    cameraRight: glMatrix.ReadonlyVec3;
    relativeDistance: number; // in [0, 1]
};

function clamp(x: number, min: number, max: number): number {
    if (x < min) {
        return min;
    } else if (x > max) {
        return max;
    }
    return x;
}

const zNearData = [
    { distance: 2, value: 0.6 },
    { distance: 2.2222222222222223, value: 0.8 },
    { distance: 2.469135802469136, value: 1 },
    { distance: 2.7434842249657065, value: 1 },
    { distance: 3.0483158055174515, value: 1.3 },
    { distance: 3.387017561686057, value: 1.7 },
    { distance: 3.763352846317841, value: 1.8 },
    { distance: 4.223740568257958, value: 2.4 },
    { distance: 6.437647566312998, value: 4.3 },
    { distance: 9.811991413371434, value: 7.4 },
    { distance: 16.6958844644795, value: 14.1 },
];

const zFarData = [
    { distance: 2, value: 3.3 },
    { distance: 2.2222222222222223, value: 3.4 },
    { distance: 2.469135802469136, value: 3.6 },
    { distance: 2.7434842249657065, value: 3.9 },
    { distance: 3.0483158055174515, value: 4 },
    { distance: 3.387017561686057, value: 4.3 },
    { distance: 3.763352846317841, value: 4.8 },
    { distance: 4.223740568257958, value: 5.2 },
    { distance: 6.437647566312998, value: 7.3 },
    { distance: 9.811991413371434, value: 10.8 },
    { distance: 16.6958844644795, value: 17.8 },
];

function interpolate(datas: { distance: number, value: number }[], distance: number): number {
    for (let i = 0; i < datas.length - 1; i++) {
        const previousData = datas[i]!;
        const nextData = datas[i + 1]!;
        if (distance < previousData.distance) {
            return previousData.value;
        } else if (distance < nextData.distance) {
            return previousData.value + (nextData.value - previousData.value) * (distance - previousData.distance) / (nextData.distance - previousData.distance);
        }
    }
    return datas[datas.length - 1]!.value;
}

const minZoom = 0.6;
const maxZoom = 5;

class Camera {
    private readonly _lookAt: glMatrix.vec3 = [0, 0, 0];

    private readonly _viewUpWorldspace = glMatrix.vec3.create();
    private readonly _viewRightWorlspace = glMatrix.vec3.create();

    private readonly _eyePosition = glMatrix.vec3.create();
    private readonly _viewMatrix = glMatrix.mat4.create();
    private readonly _projectionMatrix = glMatrix.mat4.create();
    private readonly _vpMatrix = glMatrix.mat4.create();

    private zoom = 2.5;
    private theta = 1;
    private phi = 1.2;

    public constructor() {
        this.clampZoom();
        this.clampPhi();

        Page.Canvas.Observers.mouseWheel.push((delta: number) => {
            this.zoom *= 1 - 0.1 * delta;
            this.clampZoom();
            this.recomputeEyePosition();
        });

        Page.Canvas.Observers.mouseDrag.push((dX: number, dY: number) => {
            this.theta -= 0.5 * 2 * 3.14159 * dX;
            this.phi -= 0.5 * 2 * 3 * dY;
            this.clampPhi();
            this.recomputeEyePosition();
        });

        // right button to move camera vertically
        {
            const canvasElement = Page.Canvas.getCanvas();
            if (!canvasElement) {
                throw new Error("No canvas element :(");
            }

            canvasElement.addEventListener("contextmenu", (event: MouseEvent) => {
                event.preventDefault();
                return false;
            });
            let rightMouseButtonDown = false;
            const RIGHT_BUTTON_CODE = 2;
            let lastMousePosition = Page.Canvas.getMousePosition();
            canvasElement.addEventListener("mousedown", (event: MouseEvent) => {
                if (event.button === RIGHT_BUTTON_CODE) {
                    rightMouseButtonDown = true;
                    lastMousePosition = Page.Canvas.getMousePosition();
                }
            });
            document.addEventListener("mouseup", (event: MouseEvent) => {
                if (event.button === RIGHT_BUTTON_CODE) {
                    rightMouseButtonDown = false;
                }
            });
            Page.Canvas.Observers.mouseMove.push((newX: number, newY: number) => {
                if (rightMouseButtonDown) {
                    const dY = newY - lastMousePosition[1];
                    this._lookAt[2] += dY;
                    this._lookAt[2] = clamp(this._lookAt[2], -.5, .5);

                    this.recomputeEyePosition();
                }
                lastMousePosition = [newX, newY];
            });
        }

        this.recomputeEyePosition();
    }

    public get viewData(): ViewData {
        this.recomputeProjectionMatrix();

        return {
            vMatrix: this._viewMatrix,
            pMatrix: this._projectionMatrix,
            vpMatrix: this._vpMatrix,
            cameraPosition: this._eyePosition,
            cameraUp: this._viewUpWorldspace,
            cameraRight: this._viewRightWorlspace,
            relativeDistance: this.zoom / maxZoom,
        };
    }

    private recomputeViewProjectionMatrix(): void {
        glMatrix.mat4.multiply(this._vpMatrix, this._projectionMatrix, this._viewMatrix);
    }

    private recomputeProjectionMatrix(): void {
        const aspectRatio = Page.Canvas.getAspectRatio();

        if (Parameters.renderProjection === EProjection.PERSPECTIVE) {
            // const zFar = this.distance + 1.3;
            // const zNear = Math.max(0.6, zFar - 4);
            const zFar = interpolate(zFarData, this.distance);
            const zNear = interpolate(zNearData, this.distance);
            glMatrix.mat4.perspective(this._projectionMatrix, 30 * (Math.PI / 180), aspectRatio, zNear, zFar);
        } else {
            const side = 2.5 / this.zoom;
            glMatrix.mat4.ortho(this._projectionMatrix, -side * aspectRatio, side * aspectRatio, -side, side, this.distance - 3.75, this.distance + 1.1);
        }

        this.recomputeViewProjectionMatrix();
    }

    private recomputeViewMatrix(): void {
        const up: glMatrix.vec3 = [0, 0, 1];
        if (this._eyePosition[0] === 0 && this._eyePosition[1] === 0) { // we are the vertical of the origin
            up[0] = -Math.sign(this._eyePosition[2]) * Math.cos(this.theta);
            up[1] = -Math.sign(this._eyePosition[2]) * Math.sin(this.theta);
            up[2] = 0;
        }

        glMatrix.mat4.lookAt(this._viewMatrix, this._eyePosition, this._lookAt, up);

        this._viewRightWorlspace[0] = this._viewMatrix[0];
        this._viewRightWorlspace[1] = this._viewMatrix[4];
        this._viewRightWorlspace[2] = this._viewMatrix[8];

        this._viewUpWorldspace[0] = this._viewMatrix[1];
        this._viewUpWorldspace[1] = this._viewMatrix[5];
        this._viewUpWorldspace[2] = this._viewMatrix[9];
    }

    private recomputeEyePosition(): void {
        this._eyePosition[0] = this._lookAt[0] + this.distance * (Math.sin(this.phi) * Math.cos(this.theta));
        this._eyePosition[1] = this._lookAt[1] + this.distance * (Math.sin(this.phi) * Math.sin(this.theta));
        this._eyePosition[2] = this._lookAt[2] + this.distance * (Math.cos(this.phi));

        this.recomputeViewMatrix();
    }

    private clampZoom(): void {
        this.zoom = clamp(this.zoom, minZoom, maxZoom);
    }

    private clampPhi(): void {
        this.phi = clamp(this.phi, 0, Math.PI);
    }

    private get distance(): number {
        return 10 / this.zoom;
    }
}

export type {
    ViewData,
};
export {
    Camera,
};


/// <reference types="../page-interface-generated" />

import * as glMatrix from "gl-matrix";

function setAverageFps(value: number): void {
    Page.Canvas.setIndicatorText("average-fps", `${value.toFixed()} fps`);
}

function setParticlesCount(value: number): void {
    Page.Canvas.setIndicatorText("particles-count", `${value.toLocaleString()}`);
}

function setGridSize(value: glMatrix.ReadonlyVec3): void {
    Page.Canvas.setIndicatorText("grid", `${value[0]}x${value[1]}x${value[2]} (${(value[0] * value[1] * value[2]).toLocaleString()} cells)`);
}

export {
    setAverageFps,
    setGridSize,
    setParticlesCount,
};


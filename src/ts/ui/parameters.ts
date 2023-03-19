/// <reference types="../page-interface-generated" />

const controlId = {
    PAUSE_CHECKBOX: "pause-checkbox-id",
    TIMESTEP_RANGE: "timestep-range-id",
    STEPS_PER_FRAME_RANGE: "iterations-per-frame-range-id",
    RESET_BUTTON: "reset-button-id",
    SPHERE_RADIUS_TABS: "sphere-radius-tabs-id",
    GRAVITY_RANGE: "gravity-range-id",

    OBSTACLE_MESH_CHECKBOX: "obstacle-mesh-checkbox-id",
    OBSTACLE_SPHERES_CHECKBOX: "obstacle-spheres-checkbox-id",

    BACKGROUND_COLORPICKER: "background-color-id",
    INDICATORS_CHECKBOX: "indicators-checkbox-id",
    AXES_CHECKBOX: "axes-checkbox-id",
    DOMAIN_CHECKBOX: "domain-checkbox-id",
    GRID_CELLS_SELECT: "grid-cells-select-id",
    PROJECTION_TABS: "projection-tabs-id",

    SPHERES_CHECKBOX: "spheres-checkbox-id",
    BLUR_CHECKBOX: "blur-checkbox-id",
    SPHERES_RADIUS_RANGE: "spheres-radius-checkbox-id",
    DISPLAY_MODE_SELECT: "display-mode-select-id",
    WATER_COLOR_COLORPICKER: "water-color-id",
    WATER_OPACITY_RANGE: "water-opacity-range-id",
    SPECULARITY_RANGE: "specularity-range-id",
    FRESNEL_RANGE: "fresnel-range-id",
};

function updateIndicatorsVisibility(): void {
    const shouldBeVisible = Page.Checkbox.isChecked(controlId.INDICATORS_CHECKBOX);
    Page.Canvas.setIndicatorsVisibility(shouldBeVisible);
}
Page.Checkbox.addObserver(controlId.INDICATORS_CHECKBOX, updateIndicatorsVisibility);
updateIndicatorsVisibility();

type ColorNormalized = [number, number, number, number];

function buildColor(id: string): ColorNormalized {
    const color = Page.ColorPicker.getValue(id);
    return [color.r / 255, color.g / 255, color.b / 255, 1];
}

enum EProjection {
    ORTHO = "ortho",
    PERSPECTIVE = "perspective",
}

enum EDisplayMode {
    LOCAL_POSITION = 0,
    CSREENSPACE_NORMALS = 1,
    WORLDSPACE_NORMALS = 2,
    WATER_DEPTH = 3,
    WATER = 3,
    DEPTH = 4,
}

enum EGridDisplayMode {
    HIDDEN = 0,
    COLOR_BY_POPULATION = 1,
    FINAL = 2,
}

enum EObstacleType {
    NONE = "0",
    LIGHTHOUSE = "1",
}

Page.Button.addObserver(controlId.RESET_BUTTON, () => {
    for (const observer of Parameters.onResetObservers) {
        observer();
    }
});
Page.Tabs.addObserver(controlId.SPHERE_RADIUS_TABS, () => {
    for (const observer of Parameters.onSphereSizeChange) {
        observer();
    }
});

abstract class Parameters {
    public static readonly onResetObservers: VoidFunction[] = [];
    public static readonly onSphereSizeChange: VoidFunction[] = [];

    public static get paused(): boolean {
        return Page.Checkbox.isChecked(controlId.PAUSE_CHECKBOX);
    }

    public static get timestep(): number {
        return Page.Range.getValue(controlId.TIMESTEP_RANGE);
    }

    public static get stepsPerFrame(): number {
        return Page.Range.getValue(controlId.STEPS_PER_FRAME_RANGE);
    }

    public static get spheresRadius(): number {
        const value = Page.Tabs.getValues(controlId.SPHERE_RADIUS_TABS)[0];
        if (!value) {
            throw new Error();
        }
        return +value;
    }

    public static get gravity(): number {
        return Page.Range.getValue(controlId.GRAVITY_RANGE);
    }

    public static get backgroundColor(): ColorNormalized {
        return buildColor(controlId.BACKGROUND_COLORPICKER);
    }

    public static get showAxes(): boolean {
        return Page.Checkbox.isChecked(controlId.AXES_CHECKBOX);
    }

    public static get showDomain(): boolean {
        return Page.Checkbox.isChecked(controlId.DOMAIN_CHECKBOX);
    }

    public static get showObstacleMesh(): boolean {
        return Page.Checkbox.isChecked(controlId.OBSTACLE_MESH_CHECKBOX);
    }
    public static get showObstacleSpheres(): boolean {
        return Page.Checkbox.isChecked(controlId.OBSTACLE_SPHERES_CHECKBOX);
    }

    public static get showParticlesMesh(): boolean {
        return false;
    }

    public static get projection(): EProjection {
        return Page.Tabs.getValues(controlId.PROJECTION_TABS)[0] as EProjection;
    }

    public static get showSpheres(): boolean {
        return Page.Checkbox.isChecked(controlId.SPHERES_CHECKBOX);
    }

    public static get showGridCells(): EGridDisplayMode {
        const value = Page.Select.getValue(controlId.GRID_CELLS_SELECT);
        if (!value) {
            throw new Error();
        }
        return +value as EGridDisplayMode;
    }

    public static get blur(): boolean {
        return Page.Checkbox.isChecked(controlId.BLUR_CHECKBOX);
    }

    public static get spheresRadiusFactor(): number {
        return Page.Range.getValue(controlId.SPHERES_RADIUS_RANGE);
    }

    public static get displayMode(): EDisplayMode {
        const value = Page.Select.getValue(controlId.DISPLAY_MODE_SELECT);
        if (!value) {
            throw new Error();
        }
        return +value as EDisplayMode;
    }

    public static get waterColor(): ColorNormalized {
        return buildColor(controlId.WATER_COLOR_COLORPICKER);
    }

    public static get waterOpacity(): number {
        return Page.Range.getValue(controlId.WATER_OPACITY_RANGE);
    }

    public static get waterSpecularity(): number {
        return Page.Range.getValue(controlId.SPECULARITY_RANGE);
    }

    public static get waterFresnel(): number {
        return Page.Range.getValue(controlId.FRESNEL_RANGE);
    }
}

export {
    EGridDisplayMode,
    EObstacleType,
    EProjection,
    Parameters,
};


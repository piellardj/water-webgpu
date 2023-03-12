/// <reference types="../page-interface-generated" />

const controlId = {
    BACKGROUND_COLORPICKER: "background-color-id",
    INDICATORS_CHECKBOX: "indicators-checkbox-id",
    AXES_CHECKBOX: "axes-checkbox-id",
    DOMAIN_CHECKBOX: "domain-checkbox-id",
    MESH_CHECKBOX: "mesh-checkbox-id",
    PROJECTION_TABS: "projection-tabs-id",

    SPHERES_CHECKBOX: "spheres-checkbox-id",
    BLUR_CHECKBOX: "blur-checkbox-id",
    SPHERES_RADIUS_RANGE: "spheres-radius-checkbox-id",
    DISPLAY_MODE_SELECT: "display-mode-select-id",
    WATER_COLOR_COLORPICKER: "water-color-id",
    WATER_OPACITY_RANGE: "water-opacity-range-id",
    SPECULARITY_RANGE: "specularity-range-id",
    FRESNEL_RANGE:  "fresnel-range-id",
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

abstract class Parameters {
    public static get backgroundColor(): ColorNormalized {
        return buildColor(controlId.BACKGROUND_COLORPICKER);
    }

    public static get showAxes(): boolean {
        return Page.Checkbox.isChecked(controlId.AXES_CHECKBOX);
    }

    public static get showDomain(): boolean {
        return Page.Checkbox.isChecked(controlId.DOMAIN_CHECKBOX);
    }

    public static get showMesh(): boolean {
        return Page.Checkbox.isChecked(controlId.MESH_CHECKBOX);
    }

    public static get projection(): EProjection {
        return Page.Tabs.getValues(controlId.PROJECTION_TABS)[0] as EProjection;
    }

    public static get showSpheres(): boolean {
        return Page.Checkbox.isChecked(controlId.SPHERES_CHECKBOX);
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
    EProjection,
    Parameters,
};


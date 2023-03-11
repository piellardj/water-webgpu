/// <reference types="../page-interface-generated" />

const controlId = {
    BACKGROUND_COLORPICKER: "background-color-id",
    INDICATORS_CHECKBOX: "indicators-checkbox-id",
    AXES_CHECKBOX: "axes-checkbox-id",
    DOMAIN_CHECKBOX: "domain-checkbox-id",
    SPHERES_CHECKBOX: "spheres-checkbox-id",
    PROJECTION_TABS: "projection-tabs-id",
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

    public static get showSpheres(): boolean {
        return Page.Checkbox.isChecked(controlId.SPHERES_CHECKBOX);
    }

    public static get projection(): EProjection {
        return Page.Tabs.getValues(controlId.PROJECTION_TABS)[0] as EProjection;
    }
}

export {
    EProjection,
    Parameters,
};


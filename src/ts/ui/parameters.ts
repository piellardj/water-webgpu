/// <reference types="../page-interface-generated" />

const controlId = {
    INDICATORS_CHECKBOX: "indicators-checkbox-id",
    BACKGROUND_COLORPICKER_ID: "background-color-id",
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

abstract class Parameters {
    public static get backgroundColor(): ColorNormalized {
        return buildColor(controlId.BACKGROUND_COLORPICKER_ID);
    }

}

export {
    Parameters,
};


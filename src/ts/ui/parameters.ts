/// <reference types="../page-interface-generated" />

const controlId = {
    PARTICLES_RADIUS_TABS: "particles-radius-tabs-id",
    PARTICLES_QUANTITY_SELECT: "particles-quantity-select-id",
    PARTICLES_GRAVITY_RANGE: "particles-gravity-range-id",
    PARTICLES_DISPLAY_CHECKBOX: "particles-display-checkbox-id",
    PARTICLES_RESET_BUTTON: "particles-reset-button-id",

    DOMAIN_ANIMATION_SELECT: "domain-animation-select-id",
    DOMAIN_ROTATION_RANGE: "domain-rotation-range-id",
    DOMAIN_CONTRACTION_RANGE: "domain-contraction-range-id",
    DOMAIN_DISPLAY_CHECKBOX: "domain-display-checkbox-id",
    DOMAIN_RESET_BUTTON: "domain-reset-button-id",

    OBSTACLE_SELECT: "obstacles-select-id",
    OBSTACLE_ANIMATION_SELECT: "obstacles-animation-select-id",
    OBSTACLE_MESH_CHECKBOX: "obstacle-mesh-checkbox-id",
    OBSTACLE_SPHERES_CHECKBOX: "obstacle-spheres-checkbox-id",

    RENDER_BACKGROUND_COLORPICKER: "render-background-color-id",
    RENDER_WATER_COLOR_COLORPICKER: "render-water-color-id",
    RENDER_WATER_OPACITY_RANGE: "render-water-opacity-range-id",
    RENDER_INDICATORS_CHECKBOX: "render-indicators-checkbox-id",
    RENDER_AXES_CHECKBOX: "render-axes-checkbox-id",
    RENDER_GRID_CELLS_SELECT: "render-grid-cells-select-id",
    RENDER_PROJECTION_TABS: "render-projection-tabs-id",

    ENGINE_PAUSE_CHECKBOX: "engine-pause-checkbox-id",
    ENGINE_TIMESTEP_RANGE: "engine-timestep-range-id",
    ENGINE_STEPS_PER_FRAME_RANGE: "engine-iterations-per-frame-range-id",

    BLUR_CHECKBOX: "blur-checkbox-id",
    SPHERES_RADIUS_RANGE: "spheres-radius-checkbox-id",
    DISPLAY_MODE_SELECT: "display-mode-select-id",
    SPECULARITY_RANGE: "specularity-range-id",
    FRESNEL_RANGE: "fresnel-range-id",
};

function updateIndicatorsVisibility(): void {
    const shouldBeVisible = Page.Checkbox.isChecked(controlId.RENDER_INDICATORS_CHECKBOX);
    Page.Canvas.setIndicatorsVisibility(shouldBeVisible);
}
Page.Checkbox.addObserver(controlId.RENDER_INDICATORS_CHECKBOX, updateIndicatorsVisibility);
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
    NONE = "none",
    CAPSULES = "capsules",
    HELIX = "helix",
    PIERCED_FLOOR = "pierced-floor",
    FUNNEL = "funnel",
}

enum EDomainAnimationType {
    NONE = "none",
    ROTATION = "rotate",
    CONTRACT = "contract",
}

enum EObstacleAnimationType {
    NONE = "none",
    ROTATION = "rotate",
}

enum EParticlesQuantity {
    X = "x",
    XX = "xx",
    XXX = "xxx",
    XXXX = "xxxx",
    XXXXX = "xxxxx",
}

const isInDebug = new URLSearchParams(window.location.search).get("debug") === "1";

Page.Controls.setVisibility(controlId.PARTICLES_DISPLAY_CHECKBOX, isInDebug);

Page.Controls.setVisibility(controlId.OBSTACLE_MESH_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.OBSTACLE_SPHERES_CHECKBOX, isInDebug);

Page.Controls.setVisibility(controlId.RENDER_AXES_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.RENDER_GRID_CELLS_SELECT, isInDebug);
Page.Controls.setVisibility(controlId.RENDER_PROJECTION_TABS, isInDebug);

abstract class Parameters {
    public static readonly isInDebug: boolean = isInDebug;

    public static readonly onParticlesQuantityChange: VoidFunction[] = [];
    public static readonly onParticlesResetObservers: VoidFunction[] = [];
    public static readonly onDomainResetObservers: VoidFunction[] = [];
    public static readonly onParticlesRadiusChange: VoidFunction[] = [];
    public static readonly onObstacleChange: VoidFunction[] = [];

    public static get particlesRadius(): number {
        const value = Page.Tabs.getValues(controlId.PARTICLES_RADIUS_TABS)[0];
        if (!value) {
            throw new Error();
        }
        return +value;
    }
    public static get particlesQuantity(): EParticlesQuantity {
        const value = Page.Select.getValue(controlId.PARTICLES_QUANTITY_SELECT);
        if (!value) {
            throw new Error();
        }
        return value as EParticlesQuantity;
    }
    public static get particlesGravity(): number {
        return Page.Range.getValue(controlId.PARTICLES_GRAVITY_RANGE);
    }
    public static get particlesDisplay(): boolean {
        return Page.Checkbox.isChecked(controlId.PARTICLES_DISPLAY_CHECKBOX);
    }
    public static get particlesDisplayAsMesh(): boolean {
        return false;
    }

    public static get domainAnimation(): EDomainAnimationType {
        const value = Page.Select.getValue(controlId.DOMAIN_ANIMATION_SELECT);
        if (!value) {
            throw new Error();
        }
        return value as EDomainAnimationType;
    }
    public static set domainRotation(value: number) {
        const rotation = (180 * value / Math.PI) % 360;
        Page.Range.setValue(controlId.DOMAIN_ROTATION_RANGE, rotation);
    }
    public static get domainRotation(): number {
        return Math.PI * Page.Range.getValue(controlId.DOMAIN_ROTATION_RANGE) / 180;
    }
    public static set domainContraction(value: number) {
        Page.Range.setValue(controlId.DOMAIN_CONTRACTION_RANGE, value);
    }
    public static get domainContraction(): number {
        return Page.Range.getValue(controlId.DOMAIN_CONTRACTION_RANGE);
    }
    public static get domainDisplay(): boolean {
        return Page.Checkbox.isChecked(controlId.DOMAIN_DISPLAY_CHECKBOX);
    }

    public static get obstacleType(): EObstacleType {
        const value = Page.Select.getValue(controlId.OBSTACLE_SELECT);
        if (!value) {
            throw new Error();
        }
        return value as EObstacleType;
    }
    public static get obstacleAnimation(): EObstacleAnimationType {
        const value = Page.Select.getValue(controlId.OBSTACLE_ANIMATION_SELECT);
        if (!value) {
            throw new Error();
        }
        return value as EObstacleAnimationType;
    }
    public static get obstacleDisplayAsMesh(): boolean {
        return Page.Checkbox.isChecked(controlId.OBSTACLE_MESH_CHECKBOX);
    }
    public static get obstacleDisplayAsSpheres(): boolean {
        return Page.Checkbox.isChecked(controlId.OBSTACLE_SPHERES_CHECKBOX);
    }

    public static get renderBackgroundColor(): ColorNormalized {
        return buildColor(controlId.RENDER_BACKGROUND_COLORPICKER);
    }
    public static get renderWaterColor(): ColorNormalized {
        return buildColor(controlId.RENDER_WATER_COLOR_COLORPICKER);
    }
    public static get renderWaterOpacity(): number {
        return Page.Range.getValue(controlId.RENDER_WATER_OPACITY_RANGE);
    }
    public static get renderAxes(): boolean {
        return Page.Checkbox.isChecked(controlId.RENDER_AXES_CHECKBOX);
    }
    public static get renderGridCells(): EGridDisplayMode {
        const value = Page.Select.getValue(controlId.RENDER_GRID_CELLS_SELECT);
        if (!value) {
            throw new Error();
        }
        return +value as EGridDisplayMode;
    }
    public static get renderProjection(): EProjection {
        return Page.Tabs.getValues(controlId.RENDER_PROJECTION_TABS)[0] as EProjection;
    }

    public static get enginePaused(): boolean {
        return Page.Checkbox.isChecked(controlId.ENGINE_PAUSE_CHECKBOX);
    }
    public static get engineTimestep(): number {
        return Page.Range.getValue(controlId.ENGINE_TIMESTEP_RANGE);
    }
    public static get engineStepsPerFrame(): number {
        return Page.Range.getValue(controlId.ENGINE_STEPS_PER_FRAME_RANGE);
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

    public static get waterSpecularity(): number {
        return Page.Range.getValue(controlId.SPECULARITY_RANGE);
    }

    public static get waterFresnel(): number {
        return Page.Range.getValue(controlId.FRESNEL_RANGE);
    }
}

Page.Tabs.addObserver(controlId.PARTICLES_RADIUS_TABS, () => {
    for (const observer of Parameters.onParticlesRadiusChange) {
        observer();
    }
});
Page.Select.addObserver(controlId.PARTICLES_QUANTITY_SELECT, () => {
    updateObstacleAnimationVisibility();
    for (const observer of Parameters.onParticlesQuantityChange) {
        observer();
    }
});
Page.Button.addObserver(controlId.PARTICLES_RESET_BUTTON, () => {
    for (const observer of Parameters.onParticlesResetObservers) {
        observer();
    }
});

Page.Button.addObserver(controlId.DOMAIN_RESET_BUTTON, () => {
    for (const observer of Parameters.onDomainResetObservers) {
        observer();
    }
});

function updateObstacleAnimationVisibility(): void {
    Page.Controls.setVisibility(controlId.OBSTACLE_ANIMATION_SELECT, Parameters.obstacleType !== EObstacleType.NONE);
}
Page.Select.addObserver(controlId.OBSTACLE_SELECT, () => {
    updateObstacleAnimationVisibility();
    for (const observer of Parameters.onObstacleChange) {
        observer();
    }
});
updateObstacleAnimationVisibility();

Page.Sections.setVisibility("debug-section-id", Parameters.isInDebug);

export {
    EDomainAnimationType,
    EGridDisplayMode,
    EObstacleAnimationType,
    EParticlesQuantity,
    EObstacleType,
    EProjection,
    Parameters,
};


import * as fs from "fs";
import * as path from "path";
import { Demopage } from "webpage-templates";
import { IDemopageData } from "webpage-templates/build/script/demopage/i-demopage-data";


const data: IDemopageData = {
    title: "Water",
    description: "WebGPU water simulation handling a million particles",
    introduction: [
        "This is a water simulation modeling water as thousands of small balls colliding with each other. You can interact with it by adding objects such as a cup or a helix. You can also dynamically change the domain constraints and the engine settings. The smaller the timestep, the more precise it is.",
        "This project runs fully on GPU and can handle up to a million balls. It is implemented with the experimental WebGPU API, which allows GPGPU in the browser for massively parallel computing.",
        "You might need to manually enable WebGPU in your browser.",
    ],
    githubProjectName: "water-webgpu",
    readme: {
        filepath: path.join(__dirname, "..", "README.md"),
        branchName: "main"
    },
    additionalLinks: [],
    styleFiles: [],
    scriptFiles: [
        "script/main.js"
    ],
    indicators: [
        {
            id: "average-fps",
            label: "Average FPS"
        },
        {
            id: "average-ips",
            label: "Average iterations per second"
        },
        {
            id: "particles-count",
            label: "Particles count"
        },
        {
            id: "grid",
            label: "Grid"
        },
    ],
    canvas: {
        width: 512,
        height: 512,
        enableFullscreen: true
    },
    controlsSections: [
        {
            title: "Engine",
            controls: [
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Pause",
                    id: "engine-pause-checkbox-id",
                    checked: false
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Timestep",
                    id: "engine-timestep-range-id",
                    min: 0.0001,
                    max: 0.001,
                    value: 0.0004,
                    step: 0.0001,
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Steps per frame",
                    id: "engine-iterations-per-frame-range-id",
                    min: 1,
                    max: 20,
                    value: 5,
                    step: 1
                },
            ],
        },
        {
            title: "Rendering",
            controls: [
                {
                    type: Demopage.supportedControls.ColorPicker,
                    title: "Background",
                    id: "render-background-color-id",
                    defaultValueHex: "#CA8BBC",
                },
                {
                    type: Demopage.supportedControls.Tabs,
                    title: "Mode",
                    id: "render-mode-tabs-id",
                    unique: true,
                    options: [
                        {
                            value: "4",
                            label: "Water",
                            checked: true,
                        },
                        {
                            value: "6",
                            label: "Balls",
                        },
                    ]
                },
                {
                    type: Demopage.supportedControls.ColorPicker,
                    title: "Water color",
                    id: "render-water-color-id",
                    defaultValueHex: "#0076EC"
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Color intensity",
                    id: "render-water-opacity-range-id",
                    min: 0,
                    max: 3,
                    value: 1,
                    step: 0.1
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Foam",
                    id: "render-foam-checkbox-id",
                    checked: false,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Indicators",
                    id: "render-indicators-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Axes",
                    id: "render-axes-checkbox-id",
                },
                {
                    type: Demopage.supportedControls.Select,
                    title: "Grid cells",
                    id: "render-grid-cells-select-id",
                    placeholder: "<unknown>",
                    options: [
                        {
                            value: "0",
                            label: "Hidden",
                            checked: true,
                        },
                        {
                            value: "1",
                            label: "Color by population",
                        },
                        {
                            value: "2",
                            label: "Final",
                        },
                    ],
                },
                {
                    type: Demopage.supportedControls.Tabs,
                    title: "Projection",
                    id: "render-projection-tabs-id",
                    unique: true,
                    options: [
                        {
                            label: "Orthographic",
                            value: "ortho",
                        },
                        {
                            label: "Perspective",
                            value: "perspective",
                            checked: true,
                        },
                    ]
                },
            ],
        },
        {
            title: "Particles",
            controls: [
                {
                    type: Demopage.supportedControls.Tabs,
                    title: "Radius",
                    id: "particles-radius-tabs-id",
                    unique: true,
                    options: [
                        {
                            value: "0.005",
                            label: "Small",
                        },
                        {
                            value: "0.01",
                            label: "Medium",
                            checked: true,
                        },
                        {
                            value: "0.02",
                            label: "Large",
                        },
                    ]
                },
                {
                    type: Demopage.supportedControls.Select,
                    title: "Quantity",
                    id: "particles-quantity-select-id",
                    placeholder: "<unknown>",
                    options: [
                        {
                            value: "s",
                            label: "Small amount",
                        },
                        {
                            value: "x",
                            label: "Fair amount",
                        },
                        {
                            value: "xx",
                            label: "Medium amount",
                            checked: true,
                        },
                        {
                            value: "xxx",
                            label: "Big amount",
                        },
                        {
                            value: "xxxx",
                            label: "Huge amount",
                        },
                        {
                            value: "xxxxx",
                            label: "Giant amount",
                        },
                    ],
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Gravity",
                    id: "particles-gravity-range-id",
                    min: -1,
                    max: 1,
                    value: 0.9,
                    step: 0.1,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Display",
                    id: "particles-display-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Button,
                    label: "Reset",
                    id: "particles-reset-button-id",
                },
            ],
        },
        {
            title: "Obstacles",
            controls: [
                {
                    type: Demopage.supportedControls.Select,
                    title: "Obstacles",
                    id: "obstacles-select-id",
                    placeholder: "<unknown>",
                    options: [
                        {
                            value: "none",
                            label: "None",
                        },
                        {
                            value: "capsules",
                            label: "Capsules",
                        },
                        {
                            value: "helix",
                            label: "Helix",
                            checked: true,
                        },
                        {
                            value: "cup",
                            label: "Cup",
                        },
                    ],
                },
                {
                    type: Demopage.supportedControls.Select,
                    title: "Animation",
                    id: "obstacles-animation-select-id",
                    placeholder: "<unknown>",
                    options: [
                        {
                            value: "none",
                            label: "None",
                        },
                        {
                            value: "rotate",
                            label: "Rotate",
                            checked: true,
                        },
                    ],
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Display mesh",
                    id: "obstacle-mesh-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Display spheres",
                    id: "obstacle-spheres-checkbox-id",
                },
            ],
        },
        {
            title: "Domain",
            controls: [
                {
                    type: Demopage.supportedControls.Select,
                    title: "Animation",
                    id: "domain-animation-select-id",
                    placeholder: "<unknown>",
                    options: [
                        {
                            value: "none",
                            label: "None",
                            checked: true,
                        },
                        {
                            value: "rotate",
                            label: "Rotate",
                        },
                        {
                            value: "contract",
                            label: "Contract",
                        },
                    ],
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Rotation",
                    id: "domain-rotation-range-id",
                    min: 0,
                    max: 360,
                    value: 0,
                    step: 0.1,
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Contraction",
                    id: "domain-contraction-range-id",
                    min: 0.2,
                    max: 1,
                    value: 1,
                    step: 0.001,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Display box",
                    id: "domain-display-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Button,
                    label: "Reset",
                    id: "domain-reset-button-id",
                },
            ],
        },
        {
            title: "Debug",
            id: "debug-section-id",
            controls: [
                {
                    type: Demopage.supportedControls.Range,
                    title: "Radius",
                    id: "debug-spheres-radius-range-id",
                    min: 0,
                    max: 2,
                    value: 1,
                    step: 0.1,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Blur",
                    id: "debug-blur-checkbox-id",
                },
                {
                    type: Demopage.supportedControls.Select,
                    title: "Display mode",
                    id: "debug-display-mode-select-id",
                    placeholder: "<unknown>",
                    options: [
                        {
                            value: "0",
                            label: "Local position",
                        },
                        {
                            value: "1",
                            label: "Screenspace normals",
                        },
                        {
                            value: "2",
                            label: "World normals",
                            checked: true,
                        },
                        {
                            value: "3",
                            label: "Water depth",
                        },
                        {
                            value: "4",
                            label: "Water",
                        },
                        {
                            value: "5",
                            label: "Depth",
                        },
                        {
                            value: "6",
                            label: "Balls",
                        },
                    ]
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Specularity",
                    id: "debug-specularity-range-id",
                    min: 0,
                    max: 1,
                    value: 0.8,
                    step: 0.01
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Fresnel",
                    id: "debug-fresnel-range-id",
                    min: 0,
                    max: 1,
                    value: 1,
                    step: 0.01
                },
            ],
        },
    ],
};

const SRC_DIR = path.resolve(__dirname);
const DEST_DIR = path.resolve(__dirname, "..", "docs");
const minified = true;

const buildResult = Demopage.build(data, DEST_DIR, {
    debug: !minified,
});

// disable linting on this file because it is generated
buildResult.pageScriptDeclaration = "/* tslint:disable */\n" + buildResult.pageScriptDeclaration;

const SCRIPT_DECLARATION_FILEPATH = path.join(SRC_DIR, "ts", "page-interface-generated.d.ts");
fs.writeFileSync(SCRIPT_DECLARATION_FILEPATH, buildResult.pageScriptDeclaration);

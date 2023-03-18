import * as fs from "fs";
import * as path from "path";
import { Demopage } from "webpage-templates";
import { IDemopageData } from "webpage-templates/build/script/demopage/i-demopage-data";


const data: IDemopageData = {
    title: "Smoothed-particle hydrodynamics",
    description: "TODO",
    introduction: [
        "Realtime SPH implementation using WebGPU",
    ],
    githubProjectName: "sph-webgpu",
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
            title: "Rendering",
            controls: [
                {
                    type: Demopage.supportedControls.ColorPicker,
                    title: "Background",
                    id: "background-color-id",
                    defaultValueHex: "#CA8BBC",
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Indicators",
                    id: "indicators-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Axes",
                    id: "axes-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Domain",
                    id: "domain-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Mesh",
                    id: "mesh-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Select,
                    title: "Grid cells",
                    id: "grid-cells-select-id",
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
                    id: "projection-tabs-id",
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
            title: "Rendering",
            controls: [
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Display",
                    id: "spheres-checkbox-id",
                    checked: true,
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Radius",
                    id: "spheres-radius-checkbox-id",
                    min: 0,
                    max: 2,
                    value: 1,
                    step: 0.1,
                },
                {
                    type: Demopage.supportedControls.Checkbox,
                    title: "Blur",
                    id: "blur-checkbox-id",
                },
                {
                    type: Demopage.supportedControls.Select,
                    title: "Display mode",
                    id: "display-mode-select-id",
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
                    ]
                },
                {
                    type: Demopage.supportedControls.ColorPicker,
                    title: "Water color",
                    id: "water-color-id",
                    defaultValueHex: "#0076EC"
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Water opacity",
                    id: "water-opacity-range-id",
                    min: 0,
                    max: 3,
                    value: 1,
                    step: 0.1
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Specularity",
                    id: "specularity-range-id",
                    min: 0,
                    max: 1,
                    value: 0.8,
                    step: 0.01
                },
                {
                    type: Demopage.supportedControls.Range,
                    title: "Fresnel",
                    id: "fresnel-range-id",
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

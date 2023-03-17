import { StructType } from "./struct-type";
import { u32 } from "./types";

const indirectDrawBufferType = new StructType("IndirectDrawBuffer", [
    { name: "vertexCount", type: u32 },
    { name: "instancesCount", type: u32 },
    { name: "firstVertex", type: u32 },
    { name: "firstInstance", type: u32 },
]);

export {
    indirectDrawBufferType,
};


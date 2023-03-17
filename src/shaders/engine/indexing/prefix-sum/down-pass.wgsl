@group(0) @binding(0) var<storage,read> workgroupOffset: array<Type>;
@group(0) @binding(1) var<storage,read_write> outputBuffer: array<Type>;
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalId: vec3<u32>,
    @builtin(workgroup_id) workgroupId: vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let globalIndex = in.globalId.x;
    let workgroupIndex = in.workgroupId.x;

    if (globalIndex < uniforms.itemsCount) {
        outputBuffer[globalIndex] = outputBuffer[globalIndex] + workgroupOffset[workgroupIndex];
    }
}

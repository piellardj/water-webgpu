@group(0) @binding(0) var<storage,read_write> data: array<Type>;
@group(0) @binding(1) var<storage,read_write> workgroupsTotals: array<Type>; // each cell stores the total for the corresponding workgroup
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

override workgroupSize: u32; // = 128u;
override maxLevel: u32;// = 8u; // 2^8 == 256 == 2 * 128

var<workgroup> workgroupCache: array<Type,workgroupSize>;

struct ComputeIn {
    @builtin(local_invocation_id) localId: vec3<u32>,
    @builtin(global_invocation_id) globalId: vec3<u32>,
    @builtin(workgroup_id) workgroupId: vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let globalIndex = in.globalId.x;
    let workgroupIndex = in.workgroupId.x;
    let localIndex = in.localId.x;
    let localIndexpp = localIndex + 1u;

    // load workgroup cache
    if (globalIndex < uniforms.itemsCount) {
        workgroupCache[localIndex] = data[globalIndex];
    } else {
        workgroupCache[localIndex] = Type(0);
    }
    workgroupBarrier();

    // local reduce
    for (var level = 0u; level < maxLevel; level = level + 1u) {
        if (localIndexpp % (2u << level) == 0u) {
            workgroupCache[localIndex] = workgroupCache[localIndex] + workgroupCache[localIndex - (1u << level)];
        }
        workgroupBarrier();
    }

    if (localIndex == workgroupSize - 1u) {
        workgroupsTotals[workgroupIndex] = workgroupCache[localIndex];
        workgroupCache[localIndex] = Type(0u); // exclusive prefix sum
    }

    workgroupBarrier();

    // local downsweep
    for (var level = maxLevel; level > 0u; level = level - 1u) {
        if (localIndexpp % (1u << level) == 0u) {
            let tempRight = workgroupCache[localIndex];
            let leftIndex = localIndex - (1u << (level - 1u));
            workgroupCache[localIndex] = tempRight + workgroupCache[leftIndex];
            workgroupCache[leftIndex] = tempRight;
        }
        workgroupBarrier();
    }

    // store result
    if (globalIndex < uniforms.itemsCount) {
        data[globalIndex] = workgroupCache[localIndex];
    }
}

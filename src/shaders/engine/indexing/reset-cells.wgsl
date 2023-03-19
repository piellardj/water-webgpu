@group(0) @binding(0) var<storage,read_write> cellsBuffer: array<Cell>;
@group(0) @binding(1) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let cellIndex = in.globalInvocationId.x;

    if (cellIndex < uniforms.cellsCount) {
        var output: Cell;
        output.particlesCount = 0u;
        output.offset = 0u;
        cellsBuffer[cellIndex] = output;
    }
}

struct Cell {            //           align(4) size(8)
    particlesCount: u32, // offset(0) align(4) size(4)
    offset: u32,         // offset(4) align(4) size(4)
};

@group(0) @binding(0) var<storage,read_write> cellsBuffer: array<Cell>;

override cellsCount: u32;
override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let cellIndex = in.globalInvocationId.x;

    if (cellIndex < cellsCount) {
        var output: Cell;
        output.particlesCount = 0u;
        output.offset = 0u;
        cellsBuffer[cellIndex] = output;
    }
}

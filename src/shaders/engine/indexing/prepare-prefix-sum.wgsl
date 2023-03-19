struct DataItem {              //           align(4) size(8)
    particlesCount: u32,       // offset(0) align(4) size(4)
    doesContainParticles: u32, // offset(4) align(4) size(4)
};

@group(0) @binding(0) var<storage,read> cellsBuffer: array<Cell>;
@group(0) @binding(1) var<storage,read_write> dataBuffer: array<DataItem>;
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let cellIndex = in.globalInvocationId.x;

    if (cellIndex < uniforms.cellsCount) {
        var dataItem: DataItem;
        dataItem.particlesCount = cellsBuffer[cellIndex].particlesCount;
        dataItem.doesContainParticles = min(1u, dataItem.particlesCount); // 0u or 1u
        dataBuffer[cellIndex] = dataItem;
    }
}

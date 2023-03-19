struct DataItem {               //           align(4) size(8)
    offsetOfFirstParticle: u32, // offset(0) align(4) size(4)
    offsetOfCell: u32,          // offset(4) align(4) size(4)
};

@group(0) @binding(0) var<storage,read> prefixSumResultBuffer: array<DataItem>;
@group(0) @binding(1) var<storage,read_write> cellsBuffer: array<Cell>;
@group(0) @binding(2) var<storage,read_write> indirectDrawBuffer: IndirectDrawBuffer;
@group(0) @binding(3) var<storage,read_write> nonEmptyCellsIndicesBuffer: array<u32>;
@group(0) @binding(4) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let cellIndex = in.globalInvocationId.x;

    if (cellIndex < uniforms.cellsCount) {
        let dataItem = prefixSumResultBuffer[cellIndex];
        let cellParticlesCount = cellsBuffer[cellIndex].particlesCount;
        cellsBuffer[cellIndex].offset = dataItem.offsetOfFirstParticle;

        let doesCellContainParticles = min(1u, cellParticlesCount);
        if (doesCellContainParticles == 1u) {
            nonEmptyCellsIndicesBuffer[dataItem.offsetOfCell] = cellIndex;
        }

        if (cellIndex == uniforms.cellsCount - 1u) {
            indirectDrawBuffer.instancesCount = dataItem.offsetOfCell + doesCellContainParticles;
        }
    }
}

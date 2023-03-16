struct Cell {            //           align(4) size(8)
    particlesCount: u32, // offset(0) align(4) size(4)
    offset: u32,         // offset(4) align(4) size(4)
};
struct CellsBuffer {
    cells: array<Cell>, // stride(8)
};

struct DataItem {              //           align(4) size(8)
    particlesCount: u32,       // offset(0) align(4) size(4)
    doesContainParticles: u32, // offset(4) align(4) size(4)
};
struct DataBuffer {
    items: array<DataItem>, // stride(8)
};

@group(0) @binding(0) var<storage,read> cellsBuffer: CellsBuffer;
@group(0) @binding(1) var<storage,read_write> dataBuffer: DataBuffer;

override cellsCount: u32;
override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let cellIndex = in.globalInvocationId.x;

    if (cellIndex < cellsCount) {
        var dataItem: DataItem;
        dataItem.particlesCount = cellsBuffer.cells[cellIndex].particlesCount;
        dataItem.doesContainParticles = min(1u, dataItem.particlesCount); // 0u or 1u
        dataBuffer.items[cellIndex] = dataItem;
    }
}

struct Particle {            //            align(16) size(16)
    position: vec3<f32>,     // offset(0)  align(16) size(12)
    indexInCell: u32,        // offset(12) align(4)  size(4)
};

@group(0) @binding(0) var<storage,read_write> cellsBuffer: array<Cell>;
@group(0) @binding(1) var<storage,read_write> particlesBuffer: array<Particle>;
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let particleId = in.globalInvocationId.x;

    if (particleId < uniforms.particlesCount) {
        let position = particlesBuffer[particleId].position;

        let naiveCellId = vec3<i32>(position / uniforms.cellSize);
        let cellId = clamp(naiveCellId, vec3<i32>(0), uniforms.gridSize - 1);
        let cellIndex: u32 = dot(vec3<u32>(cellId), uniforms.cellsStride);

        particlesBuffer[particleId].indexInCell = atomicAdd(&cellsBuffer[cellIndex].particlesCount, 1u);
    }
}

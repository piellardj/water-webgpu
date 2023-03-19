@group(0) @binding(0) var<storage,read_write> particlesBuffer: array<Particle>;
@group(0) @binding(1) var<storage,read> cellsBuffer: array<Cell>;
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

fn computeCellId(position: vec3<f32>) -> vec3<i32> {
    let naiveCellId = vec3<i32>(position / uniforms.cellSize);
    return clamp(naiveCellId, vec3<i32>(0), uniforms.gridSize - 1);
}

fn computeCellIndex(position: vec3<f32>) -> u32 {
    let cellId = computeCellId(position);
    return dot(vec3<u32>(cellId), uniforms.cellsStride);
}

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let particleId = in.globalInvocationId.x;
    if (particleId >= uniforms.particlesCount) {
        return;
    }

    var particle = particlesBuffer[particleId];
    if (particle.weight >= uniforms.weightThreshold) {
        return;
    }

    particle.acceleration = vec3<f32>(0);

    let cellId = computeCellId(particle.position);
    let minNeighbourCellId = vec3<u32>(max(cellId - 1, vec3<i32>(0)));
    let maxNeighbourCellId = vec3<u32>(min(cellId + 1, uniforms.gridSize - 1));
    var neighbourCellId: vec3<u32>;
    for (neighbourCellId.z = minNeighbourCellId.z; neighbourCellId.z <= maxNeighbourCellId.z; neighbourCellId.z++) {
        for (neighbourCellId.y = minNeighbourCellId.y; neighbourCellId.y <= maxNeighbourCellId.y; neighbourCellId.y++) {
            for (neighbourCellId.x = minNeighbourCellId.x; neighbourCellId.x <= maxNeighbourCellId.x; neighbourCellId.x++) {
                let neighbourCellIndex = dot(neighbourCellId, uniforms.cellsStride);
                let neighbourCell = cellsBuffer[neighbourCellIndex];

                let neighbourStartIndex = neighbourCell.offset;
                let neighbourEndIndex = neighbourCell.offset + neighbourCell.particlesCount; // exclusive
                for (var neighbourIndex = neighbourStartIndex; neighbourIndex < neighbourEndIndex; neighbourIndex++) {
                    if (neighbourIndex != particleId) {
                        let neighbour = particlesBuffer[neighbourIndex];
                        let fromVector = particle.position - neighbour.position;
                        let distance = length(fromVector);
                        
                        let penetration = 2.0 * uniforms.particleRadius - distance;

                        if (penetration > 0.0) {
                            particle.acceleration += (0.96 * neighbour.weight / (particle.weight + neighbour.weight)) * penetration * normalize(fromVector) / uniforms.dt;
                        }
                    }
                }
            }
        }
    }

    particle.acceleration += uniforms.gravity;

    // upper bound
    let upperBound = vec3<f32>(1.0 - uniforms.particleRadius);
    let upperBoundPenetration = particle.position - upperBound;
    let upperBoundCheck = step(vec3<f32>(0), upperBoundPenetration); // 1 if out of bounds, 0 if in bounds
    particle.acceleration -= upperBoundCheck * (2.0 * upperBoundPenetration) / uniforms.dt;

    // lower bound
    let lowerBound = vec3<f32>(uniforms.particleRadius);
    let lowerBoundPenetration = lowerBound - particle.position;
    let lowerBoundCheck = step(vec3<f32>(0), lowerBoundPenetration); // 1 if out of bounds, 0 if in bounds
    particle.acceleration += lowerBoundCheck * (2.0 * lowerBoundPenetration) / uniforms.dt;

    particlesBuffer[particleId] = particle;
}

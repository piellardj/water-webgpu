@group(0) @binding(0) var<storage,read> positionsBuffer: array<vec3<f32>>; // stride(16)
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
        var particle: Particle;
        particle.position = positionsBuffer[particleId];
        particle.velocity = vec3<f32>(0);
        particle.acceleration = vec3<f32>(0);
        particlesBuffer[particleId] = particle;
    }
}

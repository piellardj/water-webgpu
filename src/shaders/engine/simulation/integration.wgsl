@group(0) @binding(0) var<storage,read_write> particlesBuffer: array<Particle>;
@group(0) @binding(1) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let particleId = in.globalInvocationId.x;

    if (particleId < uniforms.particlesCount) {
        var particle = particlesBuffer[particleId];

        particle.velocity = particle.velocity + uniforms.dt * particle.acceleration;
        particle.position = particle.position + uniforms.dt * particle.velocity;

         particlesBuffer[particleId] = particle;
    }
}

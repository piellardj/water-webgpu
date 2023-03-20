@group(0) @binding(0) var<storage,read_write> particlesBuffer: array<Particle>;
@group(0) @binding(1) var<uniform> uniforms: Uniforms;

override workgroupSize: i32;

struct ComputeIn {
    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,
};

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

    let dtAcceleration: vec3<f32> = uniforms.dt * particle.acceleration;
    particle.foam += 10.0 * uniforms.dt * length(particle.velocity);
    particle.velocity = particle.velocity + dtAcceleration;
    particle.velocity *= 0.999;
    particle.position = particle.position + uniforms.dt * particle.velocity;
    particle.foam = min(1.0, particle.foam * 0.997);

    particlesBuffer[particleId] = particle;
}

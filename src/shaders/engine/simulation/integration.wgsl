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

        // upper bound
        let upperBound = vec3<f32>(1.0 - uniforms.particleRadius);
        let upperBoundCheck: vec3<bool> = upperBound < particle.position; // 1 if out of bounds, 0 if in bounds
        particle.velocity = select(particle.velocity, -uniforms.damping * particle.velocity, upperBoundCheck);
        particle.position = select(particle.position, upperBound, upperBoundCheck);

        // lower bound
        let lowerBound = vec3<f32>(uniforms.particleRadius);
        let lowerBoundCheck: vec3<bool> = particle.position < lowerBound; // 1 if out of bounds, 0 if in bounds
        particle.velocity = select(particle.velocity, -uniforms.damping * particle.velocity, lowerBoundCheck);
        particle.position = select(particle.position,  lowerBound, lowerBoundCheck);

        //particleRadius
        particlesBuffer[particleId] = particle;
    }
}

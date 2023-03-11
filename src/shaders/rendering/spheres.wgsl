struct Uniforms {           //            align(16) size(96)
    mvp: mat4x4<f32>,       // offset(0)  align(16) size(64)
    cameraUp: vec3<f32>,    // offset(64) align(16) size(12)
    sphereRadius: f32,      // offset(76) align(4)  size(4) 
    cameraRight: vec3<f32>, // offset(80) align(16) size(12)
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @location(0) center: vec3<f32>,
    @builtin(vertex_index) vertexIndex: u32,
};

struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) localPosition: vec2<f32>, // in [-.5, +1]^2
    @location(1) middlePointDepth: f32,
};

@vertex
fn main_vertex(in: VertexIn) -> VertexOut {
    const quadVertices = array<vec2<f32>,6>(
        vec2<f32>(-.5, -.5), vec2<f32>(0.5, -.5), vec2<f32>(0.5, 0.5),
        vec2<f32>(-.5, -.5), vec2<f32>(0.5, 0.5), vec2<f32>(-.5, 0.5),
    );

    let corner = quadVertices[in.vertexIndex];

    var output: VertexOut;
    let worldPosition: vec3<f32> = in.center + uniforms.sphereRadius * (corner.x * uniforms.cameraRight + corner.y * uniforms.cameraUp);
    output.position = uniforms.mvp * vec4<f32>(worldPosition, 1.0);
    output.localPosition = 2.0 * corner;

    let toCamera: vec3<f32> = cross(uniforms.cameraRight, uniforms.cameraUp);
    let nearestPointWorldPosition: vec3<f32> = in.center + uniforms.sphereRadius * toCamera;
    let nearestPoint = uniforms.mvp * vec4<f32>(nearestPointWorldPosition, 1.0);
    output.middlePointDepth = nearestPoint.z / nearestPoint.w;
    return output;
}

struct FragmentOut {
    @builtin(frag_depth) depth: f32,
    @location(0) color: vec4<f32>,
};

@fragment
fn main_fragment(in: VertexOut) -> FragmentOut {
    let distanceFromCenterSquared: f32 = dot(in.localPosition, in.localPosition);
    if (distanceFromCenterSquared > 1.0) {
        discard;
    }

    let localDepth = sqrt(1.0 - distanceFromCenterSquared);

    var output: FragmentOut;
    output.depth = mix(in.position.z, in.middlePointDepth, localDepth);
    output.color = vec4<f32>(0.5 * in.localPosition + 0.5, 0, output.depth);
    return output;
}

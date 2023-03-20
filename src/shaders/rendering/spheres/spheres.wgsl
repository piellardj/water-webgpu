@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @location(0) center: vec3<f32>,
    @location(1) weight: f32,
    @location(2) foam: f32,
    @builtin(vertex_index) vertexIndex: u32,
};

struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) localPosition: vec2<f32>, // in {-1, +1}^2
    @location(1) middlePointDepth: f32,
    @location(2) @interpolate(flat) isDisplayed: u32,
    @location(3) @interpolate(flat) foam: f32,
};

@vertex
fn main_vertex(in: VertexIn) -> VertexOut {
    const quadVertices = array<vec2<f32>,6>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0), vec2<f32>(1.0, 1.0),
        vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, 1.0), vec2<f32>(-1.0, 1.0),
    );

    let corner = quadVertices[in.vertexIndex];

    var output: VertexOut;
    let centerWorld4 = uniforms.mMatrix * vec4<f32>(in.center, 1.0);
    let centerWorld = centerWorld4.xyz / centerWorld4.w;

    let worldPosition: vec3<f32> = centerWorld + uniforms.sphereRadius * (corner.x * uniforms.cameraRight + corner.y * uniforms.cameraUp);
    output.position = uniforms.vpMatrix * vec4<f32>(worldPosition, 1.0);
    output.localPosition = corner;

    let toCamera: vec3<f32> = cross(uniforms.cameraRight, uniforms.cameraUp);
    let nearestPointWorldPosition: vec3<f32> = centerWorld + uniforms.sphereRadius * toCamera;
    let nearestPoint = uniforms.vpMatrix * vec4<f32>(nearestPointWorldPosition, 1.0);
    output.middlePointDepth = nearestPoint.z / nearestPoint.w;

    output.isDisplayed = select(0u, 1u, in.weight < uniforms.weightThreshold);
    output.foam = in.foam;

    return output;
}

fn computeLocalDepth(in: VertexOut) -> f32 {
    if (in.isDisplayed == 0u) {
        discard;
    }

    let distanceFromCenterSquared: f32 = dot(in.localPosition, in.localPosition);
    if (distanceFromCenterSquared > 1.0) {
        discard;
    }

    return sqrt(1.0 - distanceFromCenterSquared);
}

fn computeDepth(in: VertexOut, localDepth: f32) -> f32 {
    return mix(in.position.z, in.middlePointDepth, localDepth);
}

struct FragmentRGAOut {
    @builtin(frag_depth) depth: f32,
    @location(0) color: vec4<f32>,
    @location(1) foam: vec4<f32>,
};

@fragment
fn main_fragment_rga(in: VertexOut) -> FragmentRGAOut {
    let localDepth = computeLocalDepth(in);
    let depth = computeDepth(in, localDepth);

    var output: FragmentRGAOut;
    output.depth = depth;
    output.color = vec4<f32>(0.5 + 0.5 * in.localPosition, 0, depth);
    output.foam = vec4<f32>(in.foam);
    return output;
}

struct FragmentBOut {
    @location(0) color: vec4<f32>,
};

@fragment
fn main_fragment_b(in: VertexOut) -> FragmentBOut {
    let localDepth = computeLocalDepth(in);
    let waterDepth = max(0.005, 40.0 * uniforms.sphereRadius * localDepth);

    var output: FragmentBOut;
    output.color = vec4<f32>(0, 0, 0.1 * waterDepth, 0);
    return output;
}

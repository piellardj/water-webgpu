struct Uniforms {     //           align(16) size(64)
    mvp: mat4x4<f32>, // offset(0) align(16) size(64)
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @builtin(vertex_index) vertexIndex: u32,
};

struct VertexOut {
    @builtin(position) position: vec4<f32>,
};

@vertex
fn main_vertex(in: VertexIn) -> VertexOut {
    const corners = array<vec3<f32>, 24>(
        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 0.0),
        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),
        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, 1.0),
        vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),
        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0),
        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),
        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(0.0, 1.0, 1.0),
        vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),
        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 0.0, 1.0),
        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 1.0),
        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 1.0, 1.0),
        vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 1.0),
    );

    var out: VertexOut;
    let position = corners[in.vertexIndex];
    out.position = uniforms.mvp * vec4<f32>(position, 1.0);
    return out;
}

struct FragmentOut {
    @location(0) color: vec4<f32>,
};

@fragment
fn main_fragment(in: VertexOut) -> FragmentOut {
    var out: FragmentOut;
    out.color = vec4<f32>(1.0);
    return out;
}

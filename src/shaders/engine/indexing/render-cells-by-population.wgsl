@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @location(0) particlesCount: u32,
    @builtin(vertex_index) vertexIndex: u32,
    @builtin(instance_index ) cellIndex: u32,
};

struct VertexOut {
   @builtin(position) position: vec4<f32>,
   @location(0) @interpolate(flat) particlesCount: u32,
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
    let corner = corners[in.vertexIndex];

    let cellId = vec3<u32>(
        in.cellIndex % uniforms.gridSize.x,
        (in.cellIndex / uniforms.gridSize.x) % uniforms.gridSize.y,
        in.cellIndex / (uniforms.gridSize.x * uniforms.gridSize.y)
    );

    let cellOrigin = vec3<f32>(cellId);

    var out: VertexOut;
    let position = (cellOrigin + corner) * uniforms.cellSize;
    out.position = uniforms.mvp * vec4<f32>(position, 1.0);
    out.particlesCount = in.particlesCount;
    return out;
}

struct FragmentOut {
    @location(0) color: vec4<f32>,
};

@fragment
fn main_fragment(in: VertexOut) -> FragmentOut {
    if (in.particlesCount == 0u) {
        discard;
    }

    var out: FragmentOut;
    out.color = vec4<f32>(uniforms.color.rgb, f32(in.particlesCount) / 3.0);
    // out.color = uniforms.color;
    return out;
}

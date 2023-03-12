struct Uniforms {        //            align(16) size(96)
    mvp: mat4x4<f32>,    // offset(0)  align(16) size(64)
    color: vec4<f32>,    // offset(64) align(16) size(16)
    gridSize: vec3<u32>, // offset(80) align(16) size(12)
    cellSize: f32,       // offset(92) align(4)  size(4) 
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @location(0) cellIndex: u32,
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
    return out;
}

struct FragmentOut {
    @location(0) color: vec4<f32>,
};

@fragment
fn main_fragment() -> FragmentOut {
    var out: FragmentOut;
    out.color = uniforms.color;
    return out;
}

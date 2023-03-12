struct Uniforms {             //            align(16) size(128)
    mvp: mat4x4<f32>,         // offset(0)  align(16) size(64) 
    modelMatrix: mat4x4<f32>, // offset(64) align(16) size(64) 
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @location(0) modelPosition: vec3<f32>,
    @location(1) modelNormal: vec3<f32>,
};

struct VertexOut {
    @builtin(position) worldPosition: vec4<f32>,
    @location(0) @interpolate(flat) worldNormal: vec3<f32>,
};

@vertex
fn main_vertex(in: VertexIn) -> VertexOut {
    var output: VertexOut;
    output.worldPosition = uniforms.mvp * vec4<f32>(in.modelPosition, 1.0);
    output.worldNormal = (uniforms.modelMatrix * vec4<f32>(in.modelNormal, 0.0)).xyz;
    return output;
}

struct FragmentOut {
    @location(0) color: vec4<f32>,
};

@fragment
fn main_fragment(in: VertexOut) -> FragmentOut {
    var output: FragmentOut;
    output.color = vec4<f32>(0.5 + 0.5 * in.worldNormal, 1.0);
    return output;
}
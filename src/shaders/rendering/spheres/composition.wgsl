@group(0) @binding(0) var uSampler: sampler;
@group(0) @binding(1) var uTexture: texture_2d<f32>;

const displayMode_positionLocal = 0u;
const displayMode_normalScreenspace = 1u;
const displayMode_normalWorld = 2u;
const displayMode_waterDepth = 3u;

struct Uniforms {           //            align(16) size(48)
    cameraRight: vec3<f32>, // offset(0)  align(16) size(12)
    displayMode: u32,       // offset(12) align(4)  size(4) 
    cameraUp: vec3<f32>,    // offset(16) align(16) size(12)
    f0: f32,                // offset(28) align(4)  size(4) 
    worldColor: vec3<f32>,  // offset(32) align(16) size(12)
    specularity: f32,       // offset(44) align(4)  size(4) 
};

@group(1) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexIn {
    @builtin(vertex_index) vertexIndex: u32,
}
struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>, // in [0, 1]^2
}

const quadCorners = array<vec2<f32>, 4>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
);

@vertex
fn main_vertex(in: VertexIn) -> VertexOut {
    var out: VertexOut;
    out.uv = quadCorners[in.vertexIndex];
    out.position = vec4<f32>(2.0 * out.uv.x - 1.0, 1.0 - 2.0 * out.uv.y, 0.0, 1.0);
    return out;
}

struct FragmentOut {
    @builtin(frag_depth) depth: f32,
    @location(0) color: vec4<f32>,
}

@fragment
fn main_fragment(in: VertexOut) -> FragmentOut {
    var out: FragmentOut;

    let sample = textureSample(uTexture, uSampler, in.uv);
    out.depth = sample.a;
    if (out.depth >= 1.0) {
        discard;
    }

    let positionLocal = 2.0 * sample.rg - 1.0;
    let waterDepth = sample.b;

    let distanceFromLocalCenterSquared = min(dot(positionLocal, positionLocal), 1.0);
    let normalScreenspace = vec3<f32>(positionLocal, sqrt(1.0 - distanceFromLocalCenterSquared));
    let toCamera = cross(uniforms.cameraRight, uniforms.cameraUp);
    let normalWorld = normalScreenspace.x * uniforms.cameraRight + normalScreenspace.y * uniforms.cameraUp + normalScreenspace.z * toCamera;

    switch uniforms.displayMode {
        case displayMode_positionLocal {
            out.color = vec4<f32>(positionLocal, 0.0, 1.0);
        }
        case displayMode_normalScreenspace {
            out.color = vec4<f32>(0.5 + 0.5 * normalScreenspace, 1.0);
        } 
        case displayMode_normalWorld {
            out.color = vec4<f32>(0.5 + 0.5 * normalWorld, 1.0);
        }
        case displayMode_waterDepth {
            out.color = vec4<f32>(vec3<f32>(waterDepth), 1.0);
        }
        default {
            out.color = vec4<f32>(0.0, 0.0, 1.0, 1.0);
        }
    }

    return out;
}

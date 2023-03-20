@group(0) @binding(0) var uSampler: sampler;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uFoamTexture: texture_2d<f32>;

const displayMode_positionLocal = 0u;
const displayMode_normalScreenspace = 1u;
const displayMode_normalWorld = 2u;
const displayMode_waterDepth = 3u;
const displayMode_water = 4u;
const displayMode_depth = 5u;
const displayMode_balls = 6u;

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
    let depth = sample.a;
    out.depth = depth;
    if (depth >= 1.0) {
        discard;
    }

    let foam = select(
        0.0,
        0.9 * smoothstep(0.15, 0.2, textureSample(uFoamTexture, uSampler, in.uv).r),
        uniforms.enableFoam == 1u
    );
    const foamColor = vec3<f32>(1.0, 1.2, 1.4);

    let positionLocal = 2.0 * sample.rg - 1.0;
    let waterDepth = sample.b;

    let distanceFromLocalCenterSquared = min(dot(positionLocal, positionLocal), 1.0);
    let normalScreenspace = vec3<f32>(positionLocal, sqrt(1.0 - distanceFromLocalCenterSquared));
    let toCamera = cross(uniforms.cameraRight, uniforms.cameraUp);
    let normalWorld = normalScreenspace.x * uniforms.cameraRight + normalScreenspace.y * uniforms.cameraUp + normalScreenspace.z * toCamera;

    switch uniforms.displayMode {
        case displayMode_depth {
            out.color = vec4<f32>(vec3<f32>(depth), 1.0);
        }
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
        case displayMode_water {
            let reflectedRayWorlspace = reflect(-toCamera, normalWorld);
            let specular = uniforms.specularity * smoothstep(0.95, 0.98, reflectedRayWorlspace.z);

            let pureWaterColor: vec3<f32> = pow(uniforms.waterColor, vec3<f32>(1.0 + 8.0 * waterDepth * uniforms.waterOpacity));
            let waterColor = mix(pureWaterColor, foamColor, foam);
            let fresnelFactor = uniforms.f0 * 2.0 * pow(1.0 - normalScreenspace.z, 2.0); // not at all the real forumla
            out.color = vec4<f32>(
                specular + mix(waterColor, uniforms.worldColor, fresnelFactor),
                1.0
            );
        }
        case displayMode_balls {
                let albedo = 1.3 * mix(vec3<f32>(0.184, 0.45, 0.913), foamColor, foam);
                let ambiant =  0.4;
                let diffuse = 0.6 * (0.5 + 0.5 * dot(normalWorld, uniforms.lightDirection));

                out.color = vec4<f32>(
                    albedo * (ambiant + diffuse),
                    1.0
                );
        }
        default {
            out.color = vec4<f32>(0.0, 0.0, 1.0, 1.0);
        }
    }

    return out;
}

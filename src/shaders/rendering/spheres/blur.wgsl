@group(0) @binding(0) var inputTexture: texture_2d<f32>;
@group(0) @binding(1) var inputFoamTexture: texture_2d<f32>;
@group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;
@group(0) @binding(3) var outputFoamTexture: texture_storage_2d<rgba8unorm, write>;
@group(0) @binding(4) var<uniform> uniforms: Uniforms;

struct ComputeIn {
    @builtin(workgroup_id) workgroupId: vec3<u32>,
    @builtin(local_invocation_id) localInvocationId: vec3<u32>,
    @builtin(global_invocation_id) globalInvocationId: vec3<u32>,
};

override workgroupSize: i32;
const blurRadius = 6;
const blurFactors = array<f32,blurRadius + 1>(
    0.09987135279447043,
    0.09780323302971188,
    0.09185334214586623,
    0.08272992187339422,
    0.07145894496300231,
    0.05919405030749892,
    0.047024831283291185,
);

alias FragmentDataType = vec4<f32>;

struct Fragment {
    data: FragmentDataType,
    depth: f32,
};

var<workgroup> workgroupCache : array<Fragment, workgroupSize>;

fn loadFragment(texelId: vec2<i32>) -> Fragment {
    var currentFragment: Fragment;
    let rawTexel = textureLoad(inputTexture, texelId, 0);
    let foam = textureLoad(inputFoamTexture, texelId, 0).r;
    currentFragment.data = vec4<f32>(rawTexel.rgb, foam);
    currentFragment.depth = rawTexel.a;
    return currentFragment;
}
fn storeFragment(texelId: vec2<i32>, cumulatedData: FragmentDataType, depth: f32) {
    let outputColor = vec4<f32>(cumulatedData.rgb, depth);
    let outputFoamColor = vec4<f32>(cumulatedData.a);
    textureStore(outputTexture, texelId, outputColor);
    textureStore(outputFoamTexture, texelId, outputFoamColor);
}

fn addContribution(currentFragmentDepth: f32, neighbourIndexInCache: i32, factor: f32, cumulatedData: ptr<function,FragmentDataType>, samplesCount: ptr<function,f32>) {
    if (neighbourIndexInCache >= 0 && neighbourIndexInCache < workgroupSize) {
        let neighbourFragment = workgroupCache[neighbourIndexInCache];

        if (distance(currentFragmentDepth, neighbourFragment.depth) < 0.02) {
            *samplesCount = *samplesCount + factor;
            *cumulatedData = *cumulatedData + factor * neighbourFragment.data;
        }
    }
}

@compute @workgroup_size(workgroupSize)
fn main(in: ComputeIn) {
    let textureSize = vec2<i32>(textureDimensions(inputTexture));
    let globalInvocationId = vec2<i32>(in.globalInvocationId.xy) - vec2<i32>(2 * blurRadius * i32(in.workgroupId.x), 0);

    let texelId = globalInvocationId.x * uniforms.direction + globalInvocationId.y * (vec2<i32>(1) - uniforms.direction);
    let indexInCache = i32(in.localInvocationId.x);

    // first, load workgroup cache
    let currentFragment = loadFragment(texelId);
    workgroupCache[indexInCache] = currentFragment;
    workgroupBarrier();

    // then compute blur
    if (texelId.x < textureSize.x && texelId.y < textureSize.y) {
        let textureSize1D: i32 = dot(textureSize, uniforms.direction);
        let nearImageBorder = (globalInvocationId.x <= blurRadius) || (globalInvocationId.x >= textureSize1D - 1 - blurRadius);
        let insideWorkgroup = (indexInCache >= blurRadius) && (indexInCache <= workgroupSize - 1 - blurRadius);
        if (nearImageBorder || insideWorkgroup) {
            var cumulatedData = FragmentDataType(0);
            var samplesCount = 0.0;

            addContribution(currentFragment.depth, indexInCache, blurFactors[0], &cumulatedData, &samplesCount);

            for (var i = 1; i <= blurRadius; i++) {
                let blurFactor = blurFactors[i];
                addContribution(currentFragment.depth, indexInCache - i, blurFactor, &cumulatedData, &samplesCount);
                addContribution(currentFragment.depth, indexInCache + i, blurFactor, &cumulatedData, &samplesCount);
            }

            cumulatedData = cumulatedData / samplesCount;
            storeFragment(texelId, cumulatedData, currentFragment.depth);
        }

    }
}

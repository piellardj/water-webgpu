# balls-webgpu

## Description
TODO


## Implementation
### Rendering
The project supports two render modes:
- balls, which is the cheapest one
- water, which is the most expensive one

These modes are purely cosmetic and don't affect the simulation in any way. In both modes I use deferred rendering.
Below, examples of both rendering modes for a same scene, comprising a central obstacle partially submerged.
<div style="text-align:center">
    <img alt="'Balls' rendering mode" src="src/readme/balls_shaded.png"/>
    <p>
        <i>"Balls" rendering mode</i>
    </p>
</div>
<div style="text-align:center">
    <img alt="'Water' rendering mode" src="src/readme/water_shaded.png"/>
    <p>
        <i>"Water" rendering mode</i>
    </p>
</div>

#### "Balls" rendering mode
This rendering mode of rendering is the most straightforward one.

Each ball is first rendered as a 2D billboard, which each fragment containing the billboard-local position in the red/green channels. The depth is stored in the alpha channel. Since the balls are really close to one another, a simple 2D billboard is not enough: I have to manually compute the depth in the fragment shader to mimic the shape of the sphere. In my tests, for large amounts of spheres this is still cheaper than using actually 3D geometry.
<div style="text-align:center">
    <img alt="In RG channels, local position. In alpha channel, depth." src="src/readme/local-pos_depth.png"/>
    <p>
        <i>In RG channels, local position. In alpha channel, depth.</i>
    </p>
</div>

Then at composition-time, I compute the world normal by combining the billboard-local position and the camera properties:
<div style="text-align:center">
    <img alt="Computed world normals." src="src/readme/world_normals.png"/>
    <p>
        <i>Computed world normals.</i>
    </p>
</div>

and from there it is easy to compute a basic diffuse shading:
<div style="text-align:center">
    <img alt="Final balls shading with diffuse lighting." src="src/readme/balls_final.png"/>
    <p>
        <i>Final balls shading with diffuse lighting.</i>
    </p>
</div>

#### "Water" rendering mode
This rendering mode is way more expensive but has a cartoonish water look that I like. Everything happens in screen-space: no additional geometry is required.

The first step is common with the "balls" rendering mode: I render each sphere as a billboard. This time however, I use all 4 channels of the texture and I store in the blue channel the cumulated depth.
<div style="text-align:center">
    <img alt="In RG channels, local position. In blue channel, water depth. In alpha channel, depth." src="src/readme/local-pos_water-depth_depth.png"/>
    <p>
        <i>In RG channels, local position. In blue channel, water depth. In alpha channel, depth.</i>
    </p>
</div>

In a second step, I apply a blur to try to merge the spheres together.
<div style="text-align:center">
    <img alt="Same texture, with local position and water depth blurred." src="src/readme/local-pos_water-depth_depth_blurred.png"/>
    <p>
        <i>Same texture, with local position and water depth blurred.</i>
    </p>
</div>

This blur is applied in a compute shader. It is computed in two steps as a separable gaussian blur: first vertical, then horizontal. For better performance, I first load the region into workgroup cache, then work on that cache.  It takes depth into account, in order to keep edges sharp: if there is a discontinuity in depth, then no blur is applied. Otherwise, a sphere in the foreground would be merged with the water in the background, which makes no sense visually.
<div style="text-align:center">
    <img alt="Where there is a depth discontinuity, no blur is applied." src="src/readme/blur_depth-aware.png"/>
    <p>
        <i>Where there is a depth discontinuity, no blur is applied.</i>
    </p>
</div>

In the last step, all this information is combined, and with a bit of fresnel and specularity here is the result:
<div style="text-align:center">
    <img alt="Here is what the shaded water looks like." src="src/readme/water.png"/>
    <p>
        <i>Here is what the shaded water looks like.</i>
    </p>
</div>

I am especially happy with the water depth information, which greatly improves the rendering since it allows to see obstacles through the water. This effect is visible in the video below:

https://user-images.githubusercontent.com/22922087/228359283-33cc019e-f49b-4865-9906-eb5b36fb7920.mp4

### Improvements
There are many ways this project could be improved.
On the engine side:
- I could use an Smoothed particle hydrodynamics (SPH) algorithm for more realistic physics;
- I could use a better integration scheme than Euler, even Verlet would be an improvement.

On the rendering side:
- another way to render water from spheres would be to recontruct the water surface, for instance with marching cubes. This is a great subject in itself and implementing it on GPU would be interesting.
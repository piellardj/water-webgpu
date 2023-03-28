# balls-webgpu

## Description


## Algorithms
### Engine
The simulation runs fully on the GPU: the CPU is only used to compute the initial positions.

#### Base principle

#### Spatial indexing
A naive implementation of these equations would be, for each sphere to check every other sphere for collision. However:
- this is obviously not scalable;
- this is wasting a lot of resources, because if two spheres are two far from one another, there is no need to compute their interaction.

The solution to both these issues is to use spatial indexing, so that:
- each particle only checks the particles near it and skips the ones far away;
- particles that are spatially close are adjacent in the `GPUBuffer`, which is favorable for GPU cache.

Spatial indexing works well on GPU, but requires an adapted implementation, different from a classical CPU one.

In my explanation, I will consider a 2D domain to make diagrams readable; however in my project I use 3D indexing. This technique can be generalized to higher dimensions if needed.

Let take the example of a scene where there are spheres of radius `r`. I divide the domain into a regular grid, where the cell size at least `2r`. This way if a sphere is in a certain cell, then the only other spheres potentially colliding are the ones in the same cell, or in the 9 adjacent cells.

In this example there are 7 spheres (in blue), and the domain is divided into 16 cells (in black). Each cell is given a unique scalar identifier.
<div style="text-align:center>
    <img alt="Spatial indexing: step 1" width="512px" src="src/readme/indexing-01.png"/>
</div>

Then I count the number of spheres in each cell (`pCount` in these diagrams), and I assign a local id to each sphere (in blue).
<div style="text-align:center">
    <img alt="Spatial indexing: step 2" src="src/readme/indexing-02.png"/>
</div>

Then I compute a prefix sum (exclusive scan): the `cStart` of each cell is the sum of the `pCount` of the previous cells.
<div style="text-align:center">
    <img alt="Spatial indexing: step 3" src="src/readme/indexing-03.png"/>
</div>

Then to each particle, I assign a global id (in red) which is the sum of the cell's `cStart` and the particle's local id. This global id is unique to each particle, and is then used to reorder particles.
<div style="text-align:center">
    <img alt="Spatial indexing: step 4" src="src/readme/indexing-04.png"/>
</div>

Once this indexing is done:
- the particles were reordered in place;
- I easily can get the list of particles in a cell: they are the ones with ids ranging from `cStart` to `cStart + pCount`.

In this example, let's say I want to compute the collisions for particle 1.
- I start by computing the cell id (cell #2)
- I then lookup particles in adjacent cells (#1, #2, #3, #5, #6, #7): in cells #1,#3,#5,#6 `pCount=0` so no particles, in cell #2 particles `0` to `0+3` (0, 1, 2), in cell #7 particles `5` to `5+1` (5).

Here is what indexing looks like (only the cells with `pCount>0` are displayed):

https://user-images.githubusercontent.com/22922087/228377674-6cc242ab-d291-4367-823d-86c9c04d8297.mp4

#### Performance
Unfortunately, at the time of writing I did not find an easy way of precisely monitoring performance. I don't know, of physics or spatial indexing, which takes the most computing time. The only metric I have is the iterations per second. Here is the evolution of the iterations per second relatively to the particles count.

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

Each ball is first rendered as a 2D billboard, which each fragment containing the billboard-local position in the red/green channels. Since the balls are really close to one another, a simple 2D billboard is not enough: I have to manually compute the depth in the fragment shader to mimic the shape of the sphere. In my tests, for large amounts of spheres this is still cheaper than using actually 3D geometry.
The depth is stored in the alpha channel. Since it is only 8 bits, I need to carefully chose the camera near and far planes to maximize useful range.
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

The first step is common with the "balls" rendering mode: I render each sphere as a billboard. This time however, I use all 4 channels of the texture and I store in the blue channel the water depth (computed in additive mode).
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

## WebGPU specificities
I used this project to further learn about WebGPU (which at the time of writing, is still in draft so things could change in the future). Below are specific implementation details I think are notable.

TODO

## Improvements
There are many ways this project could be improved.
On the engine side:
- I could use an Smoothed particle hydrodynamics (SPH) algorithm for more realistic physics;
- I could use a better integration scheme than Euler, even Verlet would be an improvement.

On the rendering side:
- another way to render water from spheres would be to recontruct the water surface, for instance with marching cubes. This is a great subject in itself and implementing it on GPU would be interesting.

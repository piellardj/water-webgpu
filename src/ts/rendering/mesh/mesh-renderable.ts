import { Mesh } from "../../engine/initial-conditions/models/mesh";
import * as WebGPU from "../../webgpu-utils/webgpu-utils";

class MeshRenderable {
    public readonly verticesCount: number;
    public readonly buffer: WebGPU.Buffer;

    public constructor(device: GPUDevice, mesh: Mesh) {
        this.verticesCount = 3 * mesh.triangles.length;
        this.buffer = new WebGPU.Buffer(device, {
            size: 4 * 2 * 3 * 3 * mesh.triangles.length,
            usage: GPUBufferUsage.VERTEX,
        });
        const buffer = new Float32Array(this.buffer.getMappedRange());
        let i = 0;
        for (const triangle of mesh.triangles) {
            buffer[i++] = triangle.p1[0];
            buffer[i++] = triangle.p1[1];
            buffer[i++] = triangle.p1[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
            buffer[i++] = triangle.p2[0];
            buffer[i++] = triangle.p2[1];
            buffer[i++] = triangle.p2[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
            buffer[i++] = triangle.p3[0];
            buffer[i++] = triangle.p3[1];
            buffer[i++] = triangle.p3[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
        }
        this.buffer.unmap();
    }

    public free(): void {
        this.buffer.free();
    }
}

export {
    MeshRenderable,
};


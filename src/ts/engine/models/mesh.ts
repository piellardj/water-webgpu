import * as glMatrix from "gl-matrix";
import { Triangle } from "./triangle";

class Mesh {
    public static load(input: string): Mesh {
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        const vertices: glMatrix.vec3[] = [];
        const triangles: Triangle[] = [];

        const lines = input.split("\n");
        lines.forEach((line: string, i: number) => {
            const lineItems = line.trim().split(/\s+/);
            const command = lineItems[0];

            if (command === "v") { // declare vertex
                if (lineItems.length !== 4) {
                    throw new Error(`Obj loading: line ${i} because it is a vertice declaration that has the wrong count of coordinates: '${line}'.`);
                }
                vertices.push([
                    parseFloat(lineItems[1]!),
                    parseFloat(lineItems[2]!),
                    parseFloat(lineItems[3]!),
                ]);
            } else if (command === "f") { // declare face
                if (lineItems.length < 4) {
                    throw new Error(`Obj loading: line ${i} because it is a face declaration that doesn't mention enough vertices: '${line}'.`);
                }

                // faces with more that 3 vertices are interpreted as TRIANGLE_FAN
                for (let iV = 3; iV < lineItems.length; iV++) {
                    const indices: [number, number, number] = [
                        +(lineItems[1]!.split("/")[0]!),
                        +(lineItems[iV - 1]!.split("/")[0]!),
                        +(lineItems[iV]!.split("/")[0]!),
                    ];

                    for (const indice of indices) {
                        if (indice < 1 || indice > vertices.length) {
                            throw new Error(`Obj loading: line ${i} because vertex index ${indice} is out of range: '${line}'.`);
                        }
                    }

                    triangles.push(new Triangle(
                        vertices[indices[0] - 1]!,
                        vertices[indices[1] - 1]!,
                        vertices[indices[2] - 1]!
                    ));
                }
            } else {
                if (line !== "") {
                    console.debug(`Ignoring line ${i} because it is not a vertice or face declaration: '${line}'.`);
                }
            }
        });

        return new Mesh(triangles);
    }

    protected constructor(
        public readonly triangles: ReadonlyArray<Triangle>) {
    }
}

export {
    Mesh,
};


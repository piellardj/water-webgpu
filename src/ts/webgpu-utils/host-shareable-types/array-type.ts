import { type Type } from "./base-type";
import { roundUp } from "./helpers";

type Constructor<T> = {
    new(): T;
};

class ArrayType<T extends Type> implements Type {
    public readonly typeName: string;
    public readonly align: number;
    public readonly size: number;

    private readonly elements: ReadonlyArray<Type>;
    private readonly stride: number;

    public constructor(subTypeConstructor: Constructor<T>, n: number) {
        const elements: Type[] = [];
        for (let i = 0; i < n; i++) {
            elements.push(new subTypeConstructor());
        }
        const firstElement = elements[0];
        if (!firstElement) {
            throw new Error(`Invalid array size '${n}'.`);
        }

        this.typeName = `array<${firstElement.typeName}, ${n}>`;
        this.align = firstElement.align;
        this.stride = roundUp(firstElement.align, firstElement.size);
        this.size = elements.length * this.stride;

        this.elements = elements;
    }

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (!Array.isArray(value) || value.length !== this.elements.length) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valuesArray = value as unknown[];

        valuesArray.forEach((arrayValue: unknown, index: number) => {
            const element = this.elements[index];
            if (!element) {
                throw new Error();
            }

            const localOffset = index * this.stride;
            element.setValue(arrayBuffer, offset + localOffset, arrayValue);
        });
    }
}

export {
    ArrayType,
};


import { type Type } from "./base-type";
import { roundUp } from "./helpers";

type AttributeDefinition = {
    readonly name: string;
    readonly type: Type;
    readonly customAlign?: number;
    readonly customSize?: number;
};

type Attribute = {
    readonly name: string;
    readonly type: Type;
    readonly align: number;
    readonly size: number;
    readonly offset: number;
    readonly customAlign?: number | undefined;
    readonly customSize?: number | undefined;
};

class StructType implements Type {
    public readonly typeName: string;
    public readonly align: number;
    public readonly size: number;
    private readonly name: string;
    private readonly attributes: ReadonlyArray<Attribute>;

    public constructor(structName: string, attributesDefinitions: AttributeDefinition[]) {
        const attributes: Attribute[] = [];
        attributesDefinitions.forEach((attributeDefinition: AttributeDefinition, index: number) => {
            const name = attributeDefinition.name;

            for (const knownAttribute of attributes) {
                if (knownAttribute.name === name) {
                    throw new Error(`Duplicate attribute name '${name}'.`);
                }
            }

            let align: number;
            const customAlign = attributeDefinition.customAlign;
            if (typeof customAlign === "number") {
                if (customAlign < attributeDefinition.type.align) {
                    throw new Error(`Custom align '${customAlign}' is supposed to be bigger than default '${attributeDefinition.type.align}' for '${name}' type '${attributeDefinition.type.typeName}'.`);
                }
                align = customAlign;
            } else {
                align = attributeDefinition.type.align;
            }

            let size: number;
            const customSize = attributeDefinition.customSize;
            if (typeof customSize === "number") {
                if (customSize < attributeDefinition.type.size) {
                    throw new Error(`Custom size '${customSize}' is supposed to be bigger than default '${attributeDefinition.type.size}' for '${name}' type '${attributeDefinition.type.typeName}'.`);
                }
                size = customSize;
            } else {
                size = attributeDefinition.type.size;
            }

            let offset = 0;
            const previousAttribute = attributes[index - 1];
            if (previousAttribute) {
                offset = roundUp(align, previousAttribute.offset + previousAttribute.size);
            }

            attributes.push({
                name,
                type: attributeDefinition.type,
                align,
                size,
                offset,
                customAlign,
                customSize,
            });
        });

        let align = -1;
        for (const attribute of attributes) {
            align = Math.max(align, attribute.align);
        }

        const lastAttribute = attributes[attributes.length - 1];
        if (!lastAttribute) {
            throw new Error(`Struct should have at least 1 attribute.`);
        }
        const size = roundUp(align, lastAttribute.offset + lastAttribute.size);

        this.typeName = `struct ${structName}`;
        this.align = align;
        this.size = size;
        this.name = structName;
        this.attributes = attributes;
    }

    public setValue(arrayBuffer: ArrayBuffer, offset: number, value: unknown): void {
        if (typeof value !== "object") {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsObject = value as object;
        for (const [attributeName, attributeValue] of Object.entries(valueAsObject)) {
            this.setValueFromName(arrayBuffer, offset, attributeName, attributeValue);
        }
    }

    public setValueFromName(arrayBuffer: ArrayBuffer, offset: number, attributeName: string, attributeValue: unknown): void {
        for (const attribute of this.attributes) {
            if (attribute.name === attributeName) {
                attribute.type.setValue(arrayBuffer, offset + attribute.offset, attributeValue);
                return;
            }
        }
        throw new Error(`Unknown struct attribute '${attributeName}'.`);
    }

    public toString(): string {
        const attributesStringData = this.attributes.map(attribute => {
            let declaration = "    ";
            if (typeof attribute.customAlign === "number") {
                declaration += `@align(${attribute.customAlign}) `;
            }
            if (typeof attribute.customSize === "number") {
                declaration += `@size(${attribute.customSize}) `;
            }
            declaration += `${attribute.name}: ${attribute.type.typeName},`;
            const offsetComment = `offset(${attribute.offset})`;
            const alignComment = `align(${attribute.align})`;
            const sizeComment = `size(${attribute.size})`;
            return {
                declaration,
                offsetComment,
                alignComment,
                sizeComment,
            };
        });

        const structDeclaration = `struct ${this.name} {`;
        const structAlignComment = `align(${this.align})`;
        const structSizeComment = `size(${this.size})`;

        let maxDeclarationSize = structDeclaration.length;
        let maxOffsetCommentSize = 0;
        let maxAlignCommentSize = structAlignComment.length;
        let maxSizeCommentSize = structSizeComment.length;
        for (const attributeAsString of attributesStringData) {
            maxDeclarationSize = Math.max(maxDeclarationSize, attributeAsString.declaration.length);
            maxOffsetCommentSize = Math.max(maxOffsetCommentSize, attributeAsString.offsetComment.length);
            maxAlignCommentSize = Math.max(maxAlignCommentSize, attributeAsString.alignComment.length);
            maxSizeCommentSize = Math.max(maxSizeCommentSize, attributeAsString.sizeComment.length);
        }

        const attributesString = attributesStringData.map(attributeStringData => {
            return `${attributeStringData.declaration.padEnd(maxDeclarationSize, " ")} // ${attributeStringData.offsetComment.padEnd(maxOffsetCommentSize, " ")} ${attributeStringData.alignComment.padEnd(maxAlignCommentSize, " ")} ${attributeStringData.sizeComment.padEnd(maxSizeCommentSize, " ")}`;
        }).join("\n");
        return `${structDeclaration.padEnd(maxDeclarationSize, " ")} // ${" ".repeat(maxOffsetCommentSize)} ${structAlignComment.padEnd(maxAlignCommentSize, " ")} ${structSizeComment.padEnd(maxSizeCommentSize, " ")}
${attributesString}
};`;
    }
}

export type {
    AttributeDefinition,
};
export {
    StructType,
};


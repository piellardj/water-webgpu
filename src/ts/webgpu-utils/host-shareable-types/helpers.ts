function roundUp(k: number, n: number): number {
    return Math.ceil(n / k) * k;
}

function isArrayLike(value: unknown): boolean {
    return Array.isArray(value) || ArrayBuffer.isView(value);
}

export {
    isArrayLike,
    roundUp,
};


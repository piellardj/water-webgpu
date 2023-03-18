function* iterateOnAllPermutations<T>(array: T[]): Generator<T[]> {
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]!;

        const remainingElements = array.filter((_value: T, index: number) => index !== i);
        if (remainingElements.length === 0) {
            yield array;
        } else {
            for (const subPermutation of iterateOnAllPermutations(remainingElements)) {
                yield [currentElement, ...subPermutation];
            }
        }
    }
}

export {
    iterateOnAllPermutations,
};


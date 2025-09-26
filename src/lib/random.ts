export function shuffleInPlace<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function sampleWithoutReplacement<T>(array: T[], count: number): T[] {
    const copy = array.slice();
    shuffleInPlace(copy);
    return copy.slice(0, Math.min(count, copy.length));
}



function printSize(size: number): string {
    const naive = size.toFixed(2);
    if (naive.endsWith("00")) {
        return size.toFixed();
    } else if (naive.endsWith("0")) {
        return size.toFixed(1);
    }
    return naive;
}

function getPrintableSize(size: number, units: string[]): string {
    if (size < 1024 || units.length === 1) {
        return `${printSize(size)}${units[0]}`
    }
    return getPrintableSize(size / 1024, units.slice(1));
}

function getPrintableSizeFromBytes(sizeInBytes: number): string {
    return getPrintableSize(sizeInBytes, ["B", "KB", "MB", "GB"]);
}

function getPrintableSizeFromKiloBytes(sizeInKiloBytes: number): string {
    return getPrintableSize(sizeInKiloBytes, ["KB", "MB", "GB"]);
}

function getPrintableSizeFromMegaBytes(sizeInMegaBytes: number): string {
    return getPrintableSize(sizeInMegaBytes, ["MB", "GB"]);
}

function getPrintableSizeFromGigaBytes(sizeInGigaBytes: number): string {
    return getPrintableSize(sizeInGigaBytes, ["GB"]);
}

export {
    getPrintableSizeFromBytes,
    getPrintableSizeFromKiloBytes,
    getPrintableSizeFromMegaBytes,
    getPrintableSizeFromGigaBytes,
};


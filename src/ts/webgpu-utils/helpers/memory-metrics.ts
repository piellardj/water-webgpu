import { getPrintableSizeFromBytes } from "./size";

type MemoryAllocationData = {
    objectType: string;
    properties?: string;
    objectSizeInBytes: number;
};

const totalSizeByObjectTypes: Record<string, number> = {};

function writeMemoryBreakdown(): void {
    let result = "GPU memory breakdown:\n";
    for (const [objectType, objectSize] of Object.entries(totalSizeByObjectTypes)) {
        const printableSize = getPrintableSizeFromBytes(objectSize);
        result += `\t- ${objectType}: ${printableSize}\n`;
    }
    console.debug(result);
}

let scheduledBreakdownId = -1;
function scheduleBreakdown(): void {
    if (scheduledBreakdownId > 0) {
        clearTimeout(scheduledBreakdownId);
    }
    scheduledBreakdownId = window.setTimeout(() => {
        writeMemoryBreakdown();
        scheduledBreakdownId = -1;
    }, 1000);
}

function buildName(data: MemoryAllocationData): string {
    if (data?.properties) {
        return `${data.objectType} (${data.properties})`;
    }
    return data.objectType;
}

function registerAllocation(data: MemoryAllocationData): void {
    if (!totalSizeByObjectTypes[data.objectType]) {
        totalSizeByObjectTypes[data.objectType] = 0;
    }
    totalSizeByObjectTypes[data.objectType] += data.objectSizeInBytes;

    const name = buildName(data);
    const objectPrintableSize = getPrintableSizeFromBytes(data.objectSizeInBytes);

    console.debug(`Allocated ${name} of size ${objectPrintableSize}.`);
    scheduleBreakdown();
}

function registerDestruction(data: MemoryAllocationData): void {
    if (typeof totalSizeByObjectTypes[data.objectType] === "undefined") {
        throw new Error(`Did not register any allocation for ${data.objectType}.`);
    }
    if (totalSizeByObjectTypes[data.objectType]! < data.objectSizeInBytes) {
        throw new Error(`Invalid memory count for ${data.objectType}.`);
    }
    totalSizeByObjectTypes[data.objectType] -= data.objectSizeInBytes;

    const name = buildName(data);
    const objectPrintableSize = getPrintableSizeFromBytes(data.objectSizeInBytes);

    console.debug(`Destroyed ${name} of size ${objectPrintableSize}.`);
    scheduleBreakdown();
}

export {
    registerAllocation,
    registerDestruction,
};


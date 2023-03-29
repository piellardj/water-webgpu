type FpsCallback = (fps: number) => void;

class Counter {
    private count: number = 0;
    public onChange: FpsCallback | null = null;

    public constructor() {
        let lastUpdate = performance.now();
        setInterval(() => {
            const now = performance.now();
            const dt = now - lastUpdate;
            lastUpdate = now;

            if (this.onChange) {
                const countPerSeconds = 1000 * this.count / dt;
                this.onChange(countPerSeconds);
            }
            this.count = 0;
        }, 500);
    }

    public register(): void {
        this.count++;
    }
}

export {
    Counter,
};


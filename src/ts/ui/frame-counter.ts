type FpsCallback = (fps: number) => void;

class FrameCounter {
    private frames: number = 0;
    public onChange: FpsCallback | null = null;

    public constructor() {
        let lastUpdate = performance.now();
        setInterval(() => {
            const now = performance.now();
            const dt = now - lastUpdate;
            lastUpdate = now;

            if (this.onChange) {
                const fps = 1000 * this.frames / dt;
                this.onChange(fps);
            }
            this.frames = 0;
        }, 500);
    }

    public registerFrame(): void {
        this.frames++;
    }
}

export {
    FrameCounter,
};


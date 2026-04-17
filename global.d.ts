export { };

declare global {
    interface Window {
        ezstandalone: {
            cmd: Array<() => void>;
            showAds: (...args: number[]) => void;
            define: (...args: number[]) => void;
            enable: () => void;
            display: () => void;
            destroyPlaceholders: (...args: number[]) => void;
        };
    }
}

import { Detector } from "../core/Detector";

export type FallbackMode = "warn" | "error";

export type StrategyConfig = {
    detectors: Detector[];
    threshold: number;
    fallback: FallbackMode;
};

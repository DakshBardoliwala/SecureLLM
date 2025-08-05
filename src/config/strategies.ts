import { RegexDetector } from "../detectors/RegexDetector";
import { StrategyConfig } from "./types";

export const strict: StrategyConfig = {
    detectors: [new RegexDetector()],
    threshold: 50,
    fallback: "error"
}

export const lenient: StrategyConfig = {
    detectors: [new RegexDetector()],
    threshold: 80,
    fallback: "warn"
}
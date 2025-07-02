import { DetectionResult, Detector } from "../core/Detector";

export class EmbeddingDetector implements Detector {
    name = "EmbeddingDetector"

    detect(prompt: string): DetectionResult {
        return {
            matches: false,
            score: 0,
            reason: ""
        }
    }
}

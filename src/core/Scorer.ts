import { DetectionResult, Detector } from "./Detector";

export type EvaluationResult = {
    blocked: boolean;
    totalScore: number;
    details: DetectionResult[];
}

export class Scorer {
    detectors: Detector[] = [];
    threshold: number = 50;

    constructor(detectors: Detector[], threshold: number = 50) {
        this.detectors = detectors;
        this.threshold = threshold;
    }

    evaluate(prompt: string): EvaluationResult {
        let totalScore: number = 0;
        let details: DetectionResult[] = [];
        
        for (const detector of this.detectors) {
            const result = detector.detect(prompt);
            totalScore += result.score;
            details.push(result);
        }

        const blocked = totalScore >= this.threshold;

        return {
            blocked,
            totalScore,
            details
        }
    }

    
}
// Core Contract - will be implemented later
export type DetectionResult = {
    matches: boolean;
    score: number;
    reason?: string;
}

export interface Detector {
    // Human Readable Identifier
    name: string;

    detect(prompt: string): DetectionResult;
}
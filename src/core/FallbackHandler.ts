import { EvaluationResult } from "../core/Scorer";

export interface FallbackHandler {
    handle(original: string, evalResult: EvaluationResult): string;
}
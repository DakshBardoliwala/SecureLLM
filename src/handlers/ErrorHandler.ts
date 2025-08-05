import { EvaluationResult } from "../core/Scorer";
import { FallbackHandler } from "../core/FallbackHandler";

export class ErrorHandler implements FallbackHandler {
    handle(original: string, evalResult: EvaluationResult): string {
        if (evalResult.blocked) {
            throw new Error(`Prompt blocked (score=${evalResult.totalScore}). Details: ${JSON.stringify(evalResult.details)}`);
        }
        return original;
    }
}
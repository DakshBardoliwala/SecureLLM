import { EvaluationResult } from "../core/Scorer";
import { FallbackHandler } from "../core/FallbackHandler";

export class WarnHandler implements FallbackHandler {
    handle(original: string, evalResult: EvaluationResult): string {
        if (evalResult.blocked) {
            console.warn(`Prompt was flagged with score=${evalResult.totalScore}. Details: ${JSON.stringify(evalResult.details)}`);
        }
        return original;
    }
}
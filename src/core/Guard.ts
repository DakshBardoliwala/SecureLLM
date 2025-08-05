import { StrategyConfig } from "../config/types";
import { ErrorHandler } from "../handlers/ErrorHandler";
import { WarnHandler } from "../handlers/WarnHandler";
import { EvaluationResult, Scorer } from "./Scorer";
import { FallbackHandler } from "./FallbackHandler";

export function guard(prompt: string, strategy: StrategyConfig): string {
    const scorer = new Scorer(strategy.detectors, strategy.threshold);
    const evaluation: EvaluationResult = scorer.evaluate(prompt);

    if (!evaluation.blocked) {
        return prompt;
    }

    let handler: FallbackHandler;

    switch (strategy.fallback) {
        case "warn":
            handler = new WarnHandler();
            break;
        case "error":
            handler = new ErrorHandler();
            break;
        default:
            throw new Error(`Unknown fallback mode: ${strategy.fallback}`);
    }

    return handler.handle(prompt, evaluation);
}
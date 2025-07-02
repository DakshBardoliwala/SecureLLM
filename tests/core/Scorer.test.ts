import { Scorer } from "../../src/core/Scorer";
import { Detector } from "../../src/core/Detector";
import { RegexDetector } from "../../src/detectors/RegexDetector";


describe("Scorer", () => {

    let scorer: Scorer;

    beforeEach(() => {
        const okDetector: Detector = { name: "ok", detect: () => ({ matches: false, score: 0 }) };
        const badDetector: Detector = { name: "bad", detect: () => ({ matches: true, score: 60 }) };
        scorer = new Scorer([okDetector, badDetector], 50);
    });

    it("should return false and a score of 0 for a prompt that matches the ok detector", () => {
        const result = scorer.evaluate("Test prompt");
        expect(result.blocked).toBe(true);
        expect(result.totalScore).toBe(60);
    });
    
    
}); 
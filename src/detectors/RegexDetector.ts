import { DetectionResult, Detector } from "../core/Detector";

export class RegexDetector implements Detector {
    name = "RegexDetector";



    detect(prompt: string): DetectionResult {
        // System Override Verbs
        const systemOverrideVerbs = [
            "ignore",
            "disregard",
            "override"
        ]
        const systemOverrideRegex = new RegExp(systemOverrideVerbs.map(verb => `\\b${verb}\\b`).join("|"), "i")

        const systemOverrideMatches = systemOverrideRegex.test(prompt)

        // Self Erase Messages
        const selfEraseMessages = [
            "forget",
            "wipe",
            "erase",
            "reset conversation"
        ]

        const selfEraseRegex = new RegExp(selfEraseMessages.map(message => `\\b${message}\\b`).join("|"), "i")

        const selfEraseMatches = selfEraseRegex.test(prompt)

        // Role Play Messages
        const rolePlayMessages = [
            "act as",
            "pretend to be",
            "simulate",
            "roleplay",
            "you are now",
            "act like"
        ]

        const rolePlayRegex = new RegExp(rolePlayMessages.map(message => `\\b${message}\\b`).join("|"), "i")

        const rolePlayMatches = rolePlayRegex.test(prompt)

        // System Leak Messages
        const systemLeakMessages = [
            "system prompt",
            "system message",
            "developer prompt",
            "developer message",
            "system instructions"
        ]

        const systemLeakRegex = new RegExp(systemLeakMessages.map(message => `\\b${message}\\b`).join("|"), "i")

        const systemLeakMatches = systemLeakRegex.test(prompt)

        // Return the Detection Result
        const matches = systemOverrideMatches || selfEraseMatches || rolePlayMatches || systemLeakMatches

        // Calculate the Score
        const score = (
            (systemOverrideMatches ? 30 : 0) +
            (selfEraseMatches ? 20 : 0) +
            (rolePlayMatches ? 25 : 0) +
            (systemLeakMatches ? 40 : 0)
        )

        // Calculate the Reason
        const reason = (
            (systemOverrideMatches ? "System Override Verb Detected\n" : "") +
            (selfEraseMatches ? "Self Erase Message Detected\n" : "") +
            (rolePlayMatches ? "Role Play Message Detected\n" : "") +
            (systemLeakMatches ? "System Leak Message Detected\n" : "")
        ).trim()

        return {
            matches,
            score,
            reason
        }

    }
}

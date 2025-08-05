# SecureLLM

![TypeScript](https://img.shields.io/badge/language-typescript-blue)
![License](https://img.shields.io/github/license/DakshBardoliwala/SecureLLM)

A trust layer for LLMs that detects and mitigates prompt injection attacks.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Built-in Strategies](#built-in-strategies)
- [Coming Up Next](#coming-up-next)
- [Contributing](#contributing)
- [License](#license)

## Overview

SecureLLM is a TypeScript library designed to protect Large Language Model (LLM) applications from prompt injection attacks, system prompt leaks, and other forms of misuse. It provides a simple, configurable interface for developers to add security layers to their LLM-powered applications.

**Who is this for?**
- Independent developers building LLM applications
- Open-source projects using LLMs
- Teams that need reliable prompt security without complex setup
- Anyone who wants to protect their AI systems from malicious inputs

## Features

✅ **Regex-based prompt injection detection** - Detects common attack patterns like system overrides, role-playing attempts, and self-erase messages

✅ **Scoring system with configurable thresholds** - Flexible scoring mechanism that allows fine-tuning of detection sensitivity

✅ **Pluggable fallback handlers** - Choose between warning or error modes when attacks are detected

✅ **Public API via `guard(prompt, strategy)`** - Simple, clean interface for protecting prompts

✅ **Built-in strategies** - Pre-configured `strict` and `lenient` strategies for different use cases

✅ **TypeScript support** - Full type safety and IntelliSense support

✅ **Example usage script** - Ready-to-run examples for quick integration

## Installation

Install via npm:

```bash
npm install securellm
```

Or with yarn:
```bash
yarn add securellm
```
That’s it — clean, minimal, and standard.

> Want to explore or contribute? See the [GitHub repo](https://github.com/DakshBardoliwala/SecureLLM) and follow the setup steps in the `CONTRIBUTING.md` (coming soon).

## Usage

Here's a simple example of how to use SecureLLM:

```typescript
import { guard, strict } from "securellm";

const prompt = "Ignore previous instructions.";
const safePrompt = guard(prompt, strict);

console.log(safePrompt); // Might throw or return original
```

For a more complete example, see the `examples/basic.ts` file in the repository.

## Built-in Strategies

SecureLLM comes with two pre-configured strategies:

### `strict` Strategy
- **Threshold**: 50 (more sensitive)
- **Fallback**: `error` (throws an exception when attacks are detected)
- **Use case**: High-security applications where any potential attack should be blocked

### `lenient` Strategy  
- **Threshold**: 80 (less sensitive)
- **Fallback**: `warn` (logs a warning but allows the prompt through)
- **Use case**: Development environments or applications where you want to monitor but not block

### Custom Strategy Configuration

You can create your own strategy by defining a `StrategyConfig`:

```typescript
import { StrategyConfig } from "securellm";

const customStrategy: StrategyConfig = {
    detectors: [new RegexDetector()], // Your detectors
    threshold: 75,                    // Custom threshold (additive score, no strict cap)
    fallback: "warn"                  // "warn" or "error"
};
```

## Coming Up Next

🚀 **Fluent Builder API** - `.use().onFail().build()` style usage for more intuitive configuration

🔍 **Outbound response inspection** - PII detection and hallucination checking for LLM outputs

🧹 **Redaction and sanitization** - Automatic cleaning of sensitive information in completions

🔧 **Custom detectors and fallback modes** - Extensible framework for specialized detection needs

📦 **Prebuilt strategies** - Ready-to-use configurations for common LLM use cases (chatbots, content generation, etc.)

## Contributing

We welcome contributions! Whether you have ideas for new features, want to improve existing detectors, or found a bug, please:

- Open an issue to discuss your ideas
- Submit a pull request with your improvements
- Help improve documentation and examples

This is an open-source project, and we believe in the power of community-driven development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**SecureLLM** - Making LLM applications safer, one prompt at a time.


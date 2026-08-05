---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Few-Shot Prompting

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Including several input-output examples in the prompt teaches the pattern. More examples = more accurate, but uses more tokens.

## 📋 Concrete Example

Prompt: 'English: Hello, French: Bonjour\nEnglish: Thank you, French: Merci\nEnglish: Goodbye, French: ___' The model fills in 'Au revoir' having learned the translation pattern from examples.

## 🔗 Analogy

Flashcards before a test - you review several example problems (few-shot examples). When the test comes (new input), you apply the pattern you learned. More flashcards (shots) = better performance.

## Related Concepts

- [[in-context-learning|In-Context Learning]]
- [[example-selection|Example Selection]]
- [[zero-shot|Zero-Shot]]
- [[prompt-engineering|Prompt Engineering]]

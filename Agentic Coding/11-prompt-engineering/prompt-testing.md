---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Prompt Testing

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Systematically testing prompts with various inputs to ensure they work reliably across edge cases, not just happy paths.

## 📋 Concrete Example

Test 'Classify sentiment: [text]' with: clearly positive, clearly negative, neutral, mixed, sarcastic, empty, very long. If it fails on sarcasm, add sarcastic examples to the prompt.

## 🔗 Analogy

Stress-testing a bridge - you don't just test with a car (happy path); you test with heavy trucks, high winds, and earthquakes (edge cases). Prompt testing does this with diverse inputs.

## Related Concepts

- [[systematic-prompting|Systematic Prompting]]
- [[evaluation|Evaluation]]
- [[edge-case|Edge Case]]
- [[iteration|Iteration]]

---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Few-Shot Learning

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Giving the model a few examples in the prompt teaches it the pattern without any training. Quick, cheap, and surprisingly effective.

## 📋 Concrete Example

Prompt: 'Positive: I love this!\nNegative: This is terrible.\nPositive: Great day!\nNow classify: The movie was boring.' The model learns from examples and says `Negative`.

## 🔗 Analogy

Showing a new employee a few examples of correctly filled forms - they learn the pattern from examples without a full training session. A few shots (examples) teach the task.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[in-context-learning|In-Context Learning]]
- [[zero-shot|Zero-Shot]]
- [[example-selection|Example Selection]]

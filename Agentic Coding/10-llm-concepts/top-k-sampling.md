---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Top-K Sampling

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

When generating text, Top-K limits the model to only choose from the K most likely next tokens, preventing very unlikely (often nonsensical) words.

## 📋 Concrete Example

Top-K=40 means the model only considers the top 40 most likely next tokens. If 'The cat sat on the' has `mat` (35%), `floor` (20%), `roof` (5%)... it won't pick `banana` (0.001%).

## 🔗 Analogy

A multiple-choice test - instead of considering every possible answer (open-ended), you only get 4 options (top-K). The correct answer is probably among them, and wild guesses are eliminated.

## Related Concepts

- [[temperature|Temperature]]
- [[top-p|Top-P]]
- [[sampling|Sampling]]
- [[next-token-prediction|Next-Token Prediction]]

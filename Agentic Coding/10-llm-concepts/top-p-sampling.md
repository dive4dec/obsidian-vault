---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Top-P Sampling

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Instead of a fixed number of options (Top-K), Top-P takes the smallest set of tokens whose probabilities sum to P (e.g., 0.9), adapting to how confident the model is.

## 📋 Concrete Example

If the model is 95% sure the next word is `the`, Top-P=0.9 only offers `the`. If it's uncertain (many words at 5-10% each), Top-P=0.9 might include 10-15 options.

## 🔗 Analogy

A smart multiple-choice test - if the question is easy, give just 2 options. If it's hard, give 5. The number adapts to difficulty. Top-P adapts the candidate pool to model confidence.

## Related Concepts

- [[temperature|Temperature]]
- [[top-k|Top-K]]
- [[sampling|Sampling]]
- [[nucleus-sampling|Nucleus Sampling]]

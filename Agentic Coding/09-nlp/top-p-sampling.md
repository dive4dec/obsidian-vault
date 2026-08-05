---
tags: [NLP-Fundamentals]
domain: NLP Fundamentals
---

# Top-P Sampling

> **Domain:** [[_nlp-fundamentals-moc|NLP Fundamentals]]

## 🎯 Motivation

Samples from the smallest set of tokens whose cumulative probability reaches P (nucleus sampling).

## 📋 Concrete Example

Top-P = 0.9 means take tokens in order of probability until they add up to 90%, then sample from that set.

## 🔗 Analogy

Like packing a suitcase - take the most important items first until you reach 90% full, then pick randomly from the rest.

## Related Concepts

- [[top-k-sampling|Top-K Sampling]]
- [[temperature|Temperature]]
- [[sampling|Sampling]]

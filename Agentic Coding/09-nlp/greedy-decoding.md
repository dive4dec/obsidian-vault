---
tags: [NLP-Fundamentals]
domain: NLP Fundamentals
---

# Greedy Decoding

> **Domain:** [[_nlp-fundamentals-moc|NLP Fundamentals]]

## 🎯 Motivation

Always picks the most likely next token. Fast but can produce repetitive or suboptimal text.

## 📋 Concrete Example

The model always picks the highest-probability word. It might get stuck repeating the same phrase.

## 🔗 Analogy

Like always choosing the shortest path at each turn without looking ahead - you might hit a dead end.

## Related Concepts

- [[beam-search|Beam Search]]
- [[sampling|Sampling]]
- [[decoder|Decoder]]

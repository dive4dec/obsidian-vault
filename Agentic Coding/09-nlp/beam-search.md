---
tags: [NLP-Fundamentals]
domain: NLP Fundamentals
---

# Beam Search

> **Domain:** [[_nlp-fundamentals-moc|NLP Fundamentals]]

## 🎯 Motivation

At each step, keeps the top K most promising partial outputs instead of just the best one. Improves generation.

## 📋 Concrete Example

With beam width 3, the decoder keeps 3 best partial translations at each step and expands all of them.

## 🔗 Analogy

Like a chess player thinking several moves ahead and keeping multiple promising lines of play.

## Related Concepts

- [[greedy-decoding|Greedy Decoding]]
- [[decoder|Decoder]]
- [[language-model|Language Model]]

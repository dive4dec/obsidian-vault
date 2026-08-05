---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Transformer Architecture

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Previous models processed text word-by-word and forgot early context. The transformer processes all words at once and lets each word `attend` to all others.

## 📋 Concrete Example

The transformer uses self-attention: in 'The cat sat on the mat because it was tired', `it` attends to `cat` to know `it` means the cat, not the mat.

## 🔗 Analogy

A classroom where every student can simultaneously see and hear every other student. Instead of passing notes one at a time (old models), everyone communicates at once (transformer).

## Related Concepts

- [[self-attention|Self-Attention]]
- [[encoder|Encoder]]
- [[decoder|Decoder]]
- [[multi-head-attention|Multi-Head Attention]]

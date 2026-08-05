---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Attention Head

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

A single attention mechanism within multi-head attention. Each head learns to focus on different types of relationships between tokens.

## 📋 Concrete Example

One head might learn to connect pronouns to nouns (`it` to `cat`). Another might learn punctuation patterns. Another might learn long-range dependencies. 12-96 heads per layer is common.

## 🔗 Analogy

Different lenses on a camera - one lens zooms in on faces, another captures landscape, another detects motion. Each attention head is a different lens for understanding text.

## Related Concepts

- [[multi-head-attention|Multi-Head Attention]]
- [[self-attention|Self-Attention]]
- [[transformer-architecture|Transformer Architecture]]

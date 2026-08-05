---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Dense Model

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

A model where all parameters are used for every token prediction. Opposite of sparse/MoE. Simpler but less efficient at scale.

## 📋 Concrete Example

GPT-3 (175B) is a dense model - all 175B parameters compute for every token. Simple and effective, but running it requires massive compute for every single token.

## 🔗 Analogy

A factory where every machine runs for every product - reliable and simple, but wasteful when some machines aren't needed for certain products. MoE is the smart factory that only runs relevant machines.

## Related Concepts

- [[mixture-of-experts|Mixture of Experts]]
- [[parameters|Parameters]]
- [[sparse-activation|Sparse Activation]]

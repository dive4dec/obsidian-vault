---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# KV Cache

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

During autoregressive generation, the model recomputes attention for all previous tokens every step. KV cache stores previous results so they don't need recompute.

## 📋 Concrete Example

When generating token 1000, the model needs attention with tokens 1-999. Without cache, it recomputes everything. With KV cache, it only computes for token 1000, reusing stored keys/values for 1-999.

## 🔗 Analogy

A note-taker in a meeting - instead of re-reading all previous notes every time someone speaks (no cache), they just add the new point to existing notes (KV cache). Much faster.

## Related Concepts

- [[autoregressive-generation|Autoregressive Generation]]
- [[attention|Attention]]
- [[inference|Inference]]
- [[latency|Latency]]

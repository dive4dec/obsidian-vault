---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Layer Normalization

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Training deep networks is unstable - values can explode or vanish. Layer normalization keeps values in a reasonable range, making training stable.

## 📋 Concrete Example

After each layer's processing, the output values are rescaled to have a mean of 0 and standard deviation of 1. This prevents numbers from growing too large or shrinking to zero.

## 🔗 Analogy

A volume limiter on a microphone - if someone shouts (values too large) or whispers (values too small), the limiter adjusts to a consistent volume. Training stays stable.

## Related Concepts

- [[layer|Layer]]
- [[training-stability|Training Stability]]
- [[batch-normalization|Batch Normalization]]

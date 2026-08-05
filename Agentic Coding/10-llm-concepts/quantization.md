---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Quantization

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Large models use too much memory. Quantization reduces the precision of parameters (e.g., 16-bit to 4-bit), shrinking the model with minimal quality loss.

## 📋 Concrete Example

A 70B model at 16-bit needs 140GB. Quantized to 4-bit, it needs ~35GB - fits on a single GPU. Quality drops slightly, but the model is still very capable.

## 🔗 Analogy

Compressing a high-res photo to JPEG - the file gets much smaller, and to the naked eye it looks almost the same. Some detail is lost, but the trade-off is worth it for storage savings.

## Related Concepts

- [[model-size|Model Size]]
- [[inference|Inference]]
- [[int4|INT4]]
- [[int8|INT8]]

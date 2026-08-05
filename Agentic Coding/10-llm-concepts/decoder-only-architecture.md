---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Decoder-Only Architecture

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Modern LLMs like GPT use only the decoder part of the original transformer. It's designed for generating text token by token.

## 📋 Concrete Example

GPT-4, GLM, and Llama are decoder-only. They take your prompt and generate the next tokens one at a time. The encoder (used for understanding) is removed - the decoder alone is powerful enough.

## 🔗 Analogy

A chef who only cooks (generates) but doesn't need a separate taster (encoder). Modern LLMs found that the cooking (generation) process alone, at scale, produces great results.

## Related Concepts

- [[encoder-decoder|Encoder-Decoder]]
- [[transformer-architecture|Transformer Architecture]]
- [[autoregressive|Autoregressive]]

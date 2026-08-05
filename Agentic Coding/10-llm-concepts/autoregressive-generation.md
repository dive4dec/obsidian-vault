---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Autoregressive Generation

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

LLMs generate text by predicting one token at a time, then feeding that token back in to predict the next. This is autoregressive generation.

## 📋 Concrete Example

To write 'Hello world': predict `Hello`, add it to input, predict ' world', add it, predict '!' (or stop). Each step uses all previous tokens.

## 🔗 Analogy

Building a tower with blocks - you place one block, then the next block goes on top of the previous ones. Each new block depends on what's already been built. You can't place block 5 before blocks 1-4.

## Related Concepts

- [[decoder|Decoder]]
- [[next-token-prediction|Next-Token Prediction]]
- [[inference|Inference]]
- [[kv-cache|KV Cache]]

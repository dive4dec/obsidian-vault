---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Decoder

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The decoder generates output tokens one at a time, using both the encoded input and the tokens it has already generated.

## 📋 Concrete Example

Generating `Bonjour`: decoder starts, uses encoder's understanding of `Hello`, produces `Bon`. Then uses encoder output + `Bon` to produce `jour`. Then stops.

## 🔗 Analogy

A writer drafting a story - they write one word at a time, each word depends on what they've already written (previous tokens) and their overall plan (encoder output).

## Related Concepts

- [[encoder-decoder-architecture|Encoder-Decoder Architecture]]
- [[autoregressive|Autoregressive]]
- [[next-token-prediction|Next-Token Prediction]]

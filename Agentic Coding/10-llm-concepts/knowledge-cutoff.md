---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Knowledge Cutoff

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

An LLM's training data has a cutoff date. Events after that date are unknown to the model unless provided in the context.

## 📋 Concrete Example

If a model's training data ends in January 2025, it doesn't know about events after that. Ask 'Who won the 2025 World Series?' and it may guess or say it doesn't know.

## 🔗 Analogy

An encyclopedia printed in January 2025 - it has everything up to that date, but nothing after. If you want current information, you need to supplement it with a live news feed (RAG).

## Related Concepts

- [[pre-training|Pre-Training]]
- [[rag|RAG]]
- [[hallucination|Hallucination]]
- [[training-data|Training Data]]

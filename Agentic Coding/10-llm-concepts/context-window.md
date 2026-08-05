---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Context Window

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

An LLM can only consider a limited amount of text at once - the context window. Text beyond it is forgotten.

## 📋 Concrete Example

GPT-4 has a 128K token context window - about 100,000 words, roughly a 300-page book. Text beyond that is not considered when generating a response.

## 🔗 Analogy

A person's short-term memory - you can hold a conversation and remember what was said recently, but if the conversation goes on for hours, the earliest parts fade. The context window is the model's short-term memory.

## Related Concepts

- [[token|Token]]
- [[attention|Attention]]
- [[sliding-window|Sliding Window]]
- [[long-context|Long Context]]

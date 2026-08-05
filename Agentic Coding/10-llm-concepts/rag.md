---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# RAG

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Retrieval-Augmented Generation: instead of relying on the model's memory, retrieve relevant documents from a database and include them in the context.

## 📋 Concrete Example

User asks about company policy. RAG searches the company document database, finds the relevant policy, includes it in the prompt. The model reads it and answers accurately.

## 🔗 Analogy

An open-book exam - instead of memorizing everything (pure LLM), you bring reference books (retrieval). When asked a question, you look up the relevant page and base your answer on it. Much more accurate.

## Related Concepts

- [[hallucination|Hallucination]]
- [[embedding|Embedding]]
- [[vector-database|Vector Database]]
- [[retrieval|Retrieval]]

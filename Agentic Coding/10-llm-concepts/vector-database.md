---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Vector Database

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

RAG needs to store and search millions of documents by meaning. Vector databases store text embeddings and find the most similar ones quickly.

## 📋 Concrete Example

Store 1 million document chunks as embeddings. When queried, compute the query embedding, find the 5 most similar document embeddings (cosine similarity), retrieve those chunks.

## 🔗 Analogy

A library catalogued by topic, not title - you search `photosynthesis` and it finds all books mentioning plant biology, even if the title doesn't contain the word. Vector databases search by meaning.

## Related Concepts

- [[embedding|Embedding]]
- [[rag|RAG]]
- [[cosine-similarity|Cosine Similarity]]
- [[similarity-search|Similarity Search]]

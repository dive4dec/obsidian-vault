---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Embedding

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

To do math on text, we convert words/tokens into lists of numbers (vectors). These embeddings capture meaning - similar words get similar numbers.

## 📋 Concrete Example

`King` might be [0.9, 0.7, 0.3, ...], `Queen` might be [0.85, 0.68, 0.32, ...] - very similar. `Banana` might be [0.1, 0.2, 0.9, ...] - very different. The numbers capture meaning.

## 🔗 Analogy

GPS coordinates for words - 'Hong Kong' and `Kowloon` have nearby coordinates (geographically close). 'Hong Kong' and `Paris` have far-apart coordinates. Embeddings are like GPS for meaning.

## Related Concepts

- [[vector|Vector]]
- [[vector-space|Vector Space]]
- [[word2vec|Word2Vec]]
- [[cosine-similarity|Cosine Similarity]]

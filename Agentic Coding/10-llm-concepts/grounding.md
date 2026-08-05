---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Grounding

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Grounding means anchoring the model's response to verifiable facts (documents, databases, APIs) rather than letting it rely on potentially inaccurate memory.

## 📋 Concrete Example

Without grounding: 'The Eiffel Tower was built in 1888.' (Wrong - it was 1889.) With grounding: RAG retrieves a Wikipedia article, model reads it, says '1889' - correct.

## 🔗 Analogy

Citing sources in an essay - instead of making claims from memory (which might be wrong), you look up the fact in a book and cite it. Grounding makes claims verifiable and trustworthy.

## Related Concepts

- [[rag|RAG]]
- [[hallucination|Hallucination]]
- [[factuality|Factuality]]
- [[citation|Citation]]

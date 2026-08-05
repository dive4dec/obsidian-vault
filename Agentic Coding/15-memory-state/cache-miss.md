---
tags: [Memory-&-State]
domain: Memory & State
---

# Cache Miss

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

When needed information is not in fast memory. The agent must search slower, larger memory stores.

## 📋 Concrete Example

User asks about 'that thing from last month.' Not in context window. Cache miss. Agent searches long-term memory: queries vector database, finds the relevant memory, retrieves it.

## 🔗 Analogy

Not finding the book on your desk (cache miss) - you must go to the library, search the catalog, find the book, and bring it back. Slower, but you find what you need.

## Related Concepts

- [[memory-hierarchy|Memory Hierarchy]]
- [[memory-retrieval|Memory Retrieval]]
- [[external-memory|External Memory]]

---
tags: [Memory-&-State]
domain: Memory & State
---

# Internal Memory

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

Information stored within the agent's context window - immediately available but limited in size.

## 📋 Concrete Example

The last 10 messages (8000 tokens) are in internal memory. The agent can reference them instantly. But it cannot hold 100,000 tokens - that requires external memory.

## 🔗 Analogy

Your desk - documents on it are immediately accessible (internal memory). But the desk is small. For more documents, you need a filing cabinet (external memory).

## Related Concepts

- [[short-term-memory|Short-Term Memory]]
- [[context-window|Context Window]]
- [[working-memory|Working Memory]]

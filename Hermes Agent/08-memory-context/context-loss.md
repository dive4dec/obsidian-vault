---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Context Loss

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

When information falls out of the context window and is forgotten. Compression helps, but some detail is always lost in very long conversations.

## Concrete Example

After a 200-message conversation, the agent does not remember the exact code from message 5. It remembers the summary (you were debugging a sort function) but not the exact code.

## Analogy

Forgetting the beginning of a long movie by the end - you remember the plot but not every line of dialogue. Context loss is the agent forgetting old details.

## Related Concepts

- [[context-window|Context Window]]
- [[context-compression|Context Compression]]
- [[compression-threshold|Compression Threshold]]

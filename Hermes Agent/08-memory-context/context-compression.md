---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Context Compression

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

When a conversation gets very long, the agent compresses older messages into a summary to fit within its context window. You keep the meaning but use less space.

## Concrete Example

After 50 messages, the agent compresses messages 1-40 into: User asked about Python lists, dicts, and loops. Decided to build a calculator. Now the context has room for new messages.

## Analogy

Summarising a long meeting into bullet points - instead of keeping the full 2-hour transcript, you write 5 key points. Same information, much less space.

## Related Concepts

- [[compression-threshold|Compression Threshold]]
- [[target-ratio|Target Ratio]]
- [[context-window|Context Window]]
- [[compress-command|Compress Command]]

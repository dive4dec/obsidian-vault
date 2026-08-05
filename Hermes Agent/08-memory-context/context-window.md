---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Context Window

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

The maximum amount of text the agent can consider at once. Like short-term memory - it holds the current conversation but has a limit.

## Concrete Example

If the context window is 128K tokens (about 100,000 words), and your conversation is 150,000 words, the oldest messages fall out of the window and are forgotten unless compressed.

## Analogy

A person short-term memory - you can hold a conversation in mind, but if it goes on for hours, the earliest parts fade. The context window is the agent short-term memory.

## Related Concepts

- [[context-compression|Context Compression]]
- [[compression-threshold|Compression Threshold]]
- [[token|Token]]

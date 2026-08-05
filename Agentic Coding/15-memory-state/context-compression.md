---
tags: [Memory-&-State]
domain: Memory & State
---

# Context Compression

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

When the conversation gets long, compress older messages into a summary to fit within the context window.

## 📋 Concrete Example

40 messages of conversation = 8000 tokens. Compress messages 1-30 into: 'User asked about Python loops, lists, and dictionaries. Understood all three.' Now 200 tokens. Recent messages 31-40 stay detailed.

## 🔗 Analogy

Summarizing a long meeting - instead of reading 10 pages of notes, you write a 1-page summary. You keep recent details but compress old ones. Context compression does this for conversations.

## Related Concepts

- [[context-window|Context Window]]
- [[summarization|Summarization]]
- [[token-management|Token Management]]

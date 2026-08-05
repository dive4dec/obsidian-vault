---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Context Compression

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Automatically compressing old conversation history when it nears the token limit. Configurable threshold and target ratio.

## Concrete Example

Compression: at 50% of context window, old messages are summarized. 5000 tokens of history -> 1000 tokens of summary. New messages have room. The model retains key facts from the summary.

## Analogy

Packing a suitcase for a trip - when it is full, you roll clothes tighter (compress) to fit more. Context compression rolls old messages tighter to fit new ones.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[compression-config|Compression Config]]
- [[context-window|Context Window]]

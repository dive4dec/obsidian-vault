---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Compression Threshold

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

The point at which context compression triggers. When the conversation length exceeds this threshold, the agent compresses automatically.

## Concrete Example

Threshold set to 80 percent of context window. When the conversation fills 80 percent, compression kicks in. Below that, no compression needed.

## Analogy

A water tank alarm - when water reaches 80 percent capacity, the alarm triggers. The compression threshold triggers when context reaches its limit.

## Related Concepts

- [[context-compression|Context Compression]]
- [[target-ratio|Target Ratio]]
- [[context-window|Context Window]]

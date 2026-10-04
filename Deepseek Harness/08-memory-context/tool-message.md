---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Tool Message

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

A message carrying a tool call and its result — often the largest text block in a conversation, which is why it is a prime target for compaction and spill. `dsh-compaction-tool-result-pruner` trims an oversized tool result to a bounded head plus tail while keeping the tool call, step, errors, and metadata intact, and `dsh-spill-policy` can move oversized results to a recovery file.

## Concrete Example

After trimming, the tool call, step, errors, and metadata are preserved — only the text content changes to a bounded head, a "middle pruned" marker, and a bounded tail, with the full original kept in the session log.

## Analogy

A reply in a chat that contains a big attached file — you show a short preview but the full file is still stored and retrievable.

## Related Concepts

- [[message|Message]]
- [[tool-result-pruner|Tool-Result Pruner]]
- [[spill|Spill]]
- [[truncation|Truncation]]

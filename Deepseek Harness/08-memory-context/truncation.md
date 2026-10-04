---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Truncation

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Cutting large content to a bounded size so it fits the window. `dsh-compaction-tool-result-pruner` truncates an oversized tool result to a bounded head plus tail, and `dsh-agent-instructions` truncates the most specific instruction file only after broader files have already been omitted from its byte budget. `dsh-output-retention` similarly caps how much a tool returns.

## Concrete Example

The pruner replaces over-budget text with the configured `headChars`, a "middle pruned" marker, and `tailChars`, keeping the tool call and metadata intact while the full original stays in the session log.

## Analogy

A "…" in the middle of a long quote — you keep the beginning and the end and drop the middle to save space.

## Related Concepts

- [[tool-result-pruner|Tool-Result Pruner]]
- [[output-retention|Output Retention]]
- [[context-budget|Context Budget]]
- [[spill|Spill]]

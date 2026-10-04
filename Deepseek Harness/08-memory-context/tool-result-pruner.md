---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Tool-Result Pruner

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-compaction-tool-result-pruner` keeps oversized tool output from filling the context window. Once a compaction trigger qualifies, it replaces over-budget text with a bounded head, a short "middle pruned" marker, and a bounded tail, leaving below-pressure conversations unchanged. The complete original result stays in the session log for exact replay, and trimming makes no model call — it may relieve enough pressure to skip summarization entirely.

## Concrete Example

Defaults trim any tool result with more than `8192` text characters to its first `4096` plus its last `1024`, joined by the marker. Set `thresholdChars`, `headChars`, `tailChars` to change the limits; the token meter determines whether the trim actually relieved pressure.

## Analogy

A photo thumbnail: you keep the first and last few lines and a "…" in the middle, with the full image still saved to retrieve later.

## Related Concepts

- [[compaction-basic|Basic Compaction]]
- [[truncation|Truncation]]
- [[spill|Spill]]
- [[tool-message|Tool Message]]

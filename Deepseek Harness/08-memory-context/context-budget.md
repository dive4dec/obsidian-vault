---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Budget

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The token budget a turn must fit in: system prompt, injected instructions, and message history all compete for the model's window. The budget is enforced indirectly — `dsh-agent-instructions` applies a byte budget to injected context files, `dsh-compaction-basic` reacts when measured pressure crosses its threshold, and `dsh-spill-policy` applies a shared text/image `maxInlineTokens` budget to tool results.

## Concrete Example

`dsh-agent-instructions` ships with a 65,536-byte budget: when it is full, broader files are omitted before the most specific file is truncated. `dsh-spill-policy` lets text and images share one `maxInlineTokens` budget.

## Analogy

A shared catering budget — once the main course is paid for, there is less left for dessert, so one line item growing forces another to shrink.

## Related Concepts

- [[token-meter|Token Meter]]
- [[instructions|Instructions]]
- [[spill-policy|Spill Policy]]
- [[context-window|Context Window]]

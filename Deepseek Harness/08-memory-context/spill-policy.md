---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Spill Policy

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-spill-policy` decides when oversized tool results spill. It keeps oversized text and image results within a shared estimated token budget: the model receives ordered head/tail content plus a path to the complete result, while images stay in attachment storage. Omitting `maxInlineTokens` disables retention, and recovery failures leave the original content visible.

## Concrete Example

Mount a spill backend such as `dsh-spill-local` and set `maxInlineTokens` in estimated tokens; text and images share the configured budget after the post-execute policy accepts the result.

## Analogy

A rules card that says "anything bigger than X gets filed away; here's the folder to find it later."

## Related Concepts

- [[spill|Spill]]
- [[output-retention|Output Retention]]
- [[context-budget|Context Budget]]
- [[recall|Recall]]

---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Output Retention

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-output-retention` provides bounded model-facing output for tools that must cap how much context they return, using item and text retainers plus a standardized omission footer. It is the tool-side complement to compaction and spill: instead of shrinking the whole conversation, it bounds what a single tool result contributes.

## Concrete Example

When a tool returns more than its retention budget allows, `dsh-output-retention` keeps the retained items and appends a standardized omission footer indicating what was left out.

## Analogy

A "showing first N items" notice at the bottom of a long list — you see the top entries and are told how many more exist.

## Related Concepts

- [[spill-policy|Spill Policy]]
- [[truncation|Truncation]]
- [[tool-message|Tool Message]]
- [[context-budget|Context Budget]]

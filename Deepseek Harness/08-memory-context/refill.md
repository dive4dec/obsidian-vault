---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Refill

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Re-adding needed context after compaction has freed space. Compaction condenses an older span into a summary, but the full original content remains in the durable session log, so the agent can re-read a spilled or condensed file or re-reference an attachment when a later turn needs it.

## Concrete Example

After `dsh-compaction-basic` condenses older history, a later turn that needs the full text can read the spilled file from its recovery path or reference the stored attachment again.

## Analogy

Opening the filing cabinet again to pull out a document you summarized away earlier.

## Related Concepts

- [[recall|Recall]]
- [[compaction-basic|Basic Compaction]]
- [[overflow|Context Overflow]]
- [[spill|Spill]]

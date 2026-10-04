---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Recall

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Bringing spilled or condensed content back into context when needed. `dsh-spill` returns an opaque locator and retrieval guidance for saved text, so a later turn can fetch the full result that a bounded preview is standing in for; condensed history can likewise be recovered from the durable session log.

## Concrete Example

A tool result is replaced by a bounded preview plus a path to the complete result; when the agent needs the full text, it reads the recovery file at that path.

## Analogy

Looking up a citation in the bibliography — the short reference in the text points you to the full source.

## Related Concepts

- [[spill|Spill]]
- [[refill|Context Refill]]
- [[forgetting|Forgetting]]
- [[salience|Salience]]

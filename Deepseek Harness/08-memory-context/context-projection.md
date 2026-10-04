---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Projection

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-session-projection` serves current per-session state — such as todos, goals, or conversation statistics — to clients without replaying the raw event log. Domain plugins register synchronous projections from committed session events, and clients receive complete, schema-validated JSON values through snapshots and change notifications.

## Concrete Example

A client carrier reads a snapshot and subscribes to the change feed; each snapshot identifies the last event reflected by every returned value so state can be paired with the matching history cut.

## Analogy

A live dashboard that shows the current score without you having to rewatch the whole match.

## Related Concepts

- [[context-cache|Context Cache]]
- [[turn-outline|Turn Outline]]
- [[context-metrics|Context Metrics]]
- [[memory|Memory]]

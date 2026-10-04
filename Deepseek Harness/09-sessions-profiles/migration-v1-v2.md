---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# v1→v2 Migration

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-format-v1-to-v2` is a cardinality-changing migration: it consumes top-level `assistant/chunk` events and embeds their exact timed stream into the matching `assistant/message`. It records an `assistant/attempt` when a failed, retried, cancelled, or stream-error attempt reached settlement without a surface message. The edge densely remaps surviving events and every same-session sequence reference.

## Concrete Example

After the migration the v2 codec stores one event per row and derives the inherited cut from a tagged `session/end-seed` marker.

## Analogy

A re-encode that stitches fragmented clips into single complete takes.

## Related Concepts

- [[migration-v0-v1|v0→v1 Migration]]
- [[migration-v2-v3|v2→v3 Migration]]
- [[format-migration|Format Migration]]

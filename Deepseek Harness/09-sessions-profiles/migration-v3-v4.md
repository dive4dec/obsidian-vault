---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# v3→v4 Migration

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-format-v3-to-v4` converts V3 Sessions to V4 without rewriting their stored generation. It lifts tool results into first-class records, renames message sources, closes evidenced interrupted turns, and appends missing parent catalog facts. Persistence owns file reads and successor publication; the library owns conversion and target rules.

## Concrete Example

The conversion remaps sequence references and inheritance while enforcing delivery-generation guards and a source audit with explicit refusal.

## Analogy

The latest container codec that also cleans up the metadata of older files.

## Related Concepts

- [[migration-v2-v3|v2→v3 Migration]]
- [[format-migration|Format Migration]]
- [[session-version|Session Version]]

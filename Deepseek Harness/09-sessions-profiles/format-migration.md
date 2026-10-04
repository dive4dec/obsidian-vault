---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Format Migration

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Format migration upgrades stored session logs from older generations to the current one so old sessions stay readable as dsh evolves. The chain is v0→v1→v2→v3→v4, and each edge is a separate package consumed through the static catalog. Malformed or unsupported historical records fail migration before the current restorer runs, with the source retained for recovery.

## Concrete Example

`dsh-session-format` composes one migration per adjacent version pair; the chain validates unique gap-free ordering at construction and `finish()` applies target validation once.

## Analogy

The codecs a video player ships so old files still play on new hardware.

## Related Concepts

- [[format-catalog|Format Catalog]]
- [[migration-v0-v1|v0→v1 Migration]]
- [[migration-v3-v4|v3→v4 Migration]]
- [[session-format|Session Format]]

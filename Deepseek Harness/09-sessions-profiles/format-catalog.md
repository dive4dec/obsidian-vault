---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Format Catalog

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-format-catalog` assembles the complete first-party inventory of codecs and adjacent migrations from the earliest supported format through the current writer. It checks the gap-free chain at module initialization, so persistence readers get a deterministic format reader without consulting mounted plugins. Feature compositions neither register nor reorder its entries.

## Concrete Example

Import `sessionFormatCatalog` for physical dispatch, header-only classification, single-pass row restoration, and current record encoding before any feature plugin mounts.

## Analogy

The master decoder table a media player consults before opening a file.

## Related Concepts

- [[format-migration|Format Migration]]
- [[session-format|Session Format]]
- [[jsonl-persistence|JSONL Persistence]]

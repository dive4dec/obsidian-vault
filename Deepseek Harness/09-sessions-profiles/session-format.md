---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Format

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-format` defines the on-disk Session schema: physical framing, header classification, and the composition of unique adjacent migrations used to restore any supported generation to the current one. It is a pure library, not a Cordis plugin, so persistence code can classify a header and stream rows through decoders without plugin mount rows.

## Concrete Example

`createSessionFormatCatalog(...)` builds the catalog; `readHeader()` classifies a physical header as `current`, `migration-required`, `unsupported`, or `malformed` before any event is read.

## Analogy

The file-version format spec, like PDF 1.7 versus PDF/A, plus the converters between them.

## Related Concepts

- [[format-migration|Format Migration]]
- [[jsonl-persistence|JSONL Persistence]]
- [[session-storage|Session Storage]]

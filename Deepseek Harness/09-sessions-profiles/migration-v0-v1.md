---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# v0→v1 Migration

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-format-v0-to-v1` restores released v0 Session JSONL by decoding each physical row into the shared-layout v1 format. It preserves validated headers and events apart from changing the version number, while applying only the finite legacy normalizations that v0 persistence accepted. It accepts only the frozen first-party event inventory.

## Concrete Example

The package decodes frozen v0 packed Assistant-delta rows and emits v1, failing migration on malformed records while retaining the source for recovery.

## Analogy

The legacy file codec that translates the oldest recordings to the shared layout.

## Related Concepts

- [[format-migration|Format Migration]]
- [[migration-v1-v2|v1→v2 Migration]]
- [[session-format|Session Format]]

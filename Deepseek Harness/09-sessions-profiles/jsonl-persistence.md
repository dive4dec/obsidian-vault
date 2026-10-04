---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# JSONL Persistence

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-persistence-jsonl` is the sole first-party persistence backend: one append-only JSONL log per session, stored as checksummed Zstandard frames by default. It keeps format migration, compression, historical decoding, and torn-tail crash recovery as storage-internal details, so consumers simply get a per-session file on disk.

## Concrete Example

Mount `@deepseek-ai/dsh-session-persistence-jsonl` with `config: { root: /absolute/path/to/session-logs }`; `root` is required, and `compression: 'none'` yields plain newline-delimited lines instead of `.jsonl.zstd`.

## Analogy

One numbered ledger file per session, where each line is one immutable entry.

## Related Concepts

- [[session-format|Session Format]]
- [[session-storage|Session Storage]]
- [[format-migration|Format Migration]]

---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Corrupt Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A corrupt session is a stored log whose tail or rows no longer validate — often a torn write left by a crash mid-flush. The persistence and format layers are built to contain this: the JSONL backend recovers from torn tails, and the format library's recoverable decoder returns the accepted logical prefix rather than failing the whole read. The source is retained so recovery can inspect it.

## Concrete Example

On a torn tail, `dsh-session-persistence-jsonl` recovers up to the last valid checksummed frame, and `dsh-session-format` returns the accepted prefix with the damaged suffix dropped.

## Analogy

A book whose last page got torn out — you read what survives and note the gap.

## Related Concepts

- [[session-integrity|Session Integrity]]
- [[format-migration|Format Migration]]
- [[checkpoint|Checkpoint]]

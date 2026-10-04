---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Integrity

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Session integrity is the validation that a stored session log is structurally sound before it is trusted: unique gap-free event ordering, valid checksums, and a decodable current format. The format catalog validates results at `finish()`, and the JSONL backend uses checksummed Zstandard frames so a torn tail is detected, not read.

## Concrete Example

`dsh-session-format` with `recovery: 'recoverable'` accepts the logical prefix and drops one malformed or sequence-gapped row plus its uncommitted suffix; a later decoded `turn/end` makes the original issue fatal.

## Analogy

The checksum verification that runs before an installer trusts a download.

## Related Concepts

- [[corrupt-session|Corrupt Session]]
- [[checkpoint|Checkpoint]]
- [[session-version|Session Version]]

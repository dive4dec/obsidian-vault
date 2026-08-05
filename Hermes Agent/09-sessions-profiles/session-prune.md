---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Session Prune

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

Delete old sessions to free space. Command: hermes sessions prune. Options: --older-than DAYS, --keep N.

## Concrete Example

hermes sessions prune --older-than 30. Deletes sessions older than 30 days. hermes sessions prune --keep 50. Keeps only the 50 most recent.

## Analogy

Cleaning out old notebooks - you throw away notes from last semester. Session prune deletes old conversations.

## Related Concepts

- [[hermes-sessions|Hermes Sessions]]
- [[sessions|Sessions]]
- [[session-store|Session Store]]

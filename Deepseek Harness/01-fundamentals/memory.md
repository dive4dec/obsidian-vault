---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Memory

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Memory is what the agent retains across turns and sessions: the durable session log (context and notes) that `dsh-session` persists, plus compaction that condenses older history into a summary so the active conversation fits the context window. Because the log is append-only and compaction only shadows superseded entries, replaying a session deterministically reproduces the same condensed conversation. Developers care because memory is the difference between a forgetful tool and one that remembers a long job.

## Concrete Example

`dsh-compaction-basic` condenses older history into a single summary message while keeping the recent conversation intact.

## Analogy

It is a meeting with minutes: early discussion is summarized, but the full record is still retrievable.

## Related Concepts

- [[context|Context]]
- [[session|Session]]
- [[turn|Turn]]

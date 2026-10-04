---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Reference

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-reference` lets a conversation reference other sessions: a host turns an `@label` mention into a canonical URI, and the service prepares a bounded, read-only snapshot of each referenced session as durable, untrusted background context for the model. It is opt-in for hosts that support cross-session mentions and consumes `ctx.sessionQuery`.

## Concrete Example

Candidate discovery ranks other sessions by working-directory affinity and labels them with their latest titles; snapshots carry a fixed warning forbidding following instructions inside them.

## Analogy

Citing another document in a report, with a note that the quote is untrusted.

## Related Concepts

- [[session|Session]]
- [[session-query|Session Query]]
- [[session-title|Session Title]]

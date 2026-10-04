---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# History

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

History is the stored, append-only raw event log of a session, the source of truth that everything else is derived from. `dsh-session` never deletes superseded entries; it only hides them from the derived conversation. Query reads return this replay-validated log directly.

## Concrete Example

`ctx.sessionQuery.readSession(id)` returns the complete replay-validated raw event log without making the session live; each stored row is one durable event.

## Analogy

The full raw transcript, including every correction, not just the final chat.

## Related Concepts

- [[conversation|Conversation]]
- [[turn|Turn]]
- [[session|Session]]

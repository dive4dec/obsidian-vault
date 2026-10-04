---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Fresh Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A fresh session starts from nothing — no inherited prefix — and is what one-shot runs use. The headless profile runs one fresh persisted session, prints the final answer, and exits. A fresh session is created by the session service with an id and metadata, then bound to the calling fiber.

## Concrete Example

`dsh --profile headless "job"` creates one fresh session; `ctx.sessions.create(sessionId, { meta: { cwd } })` is the service-level form.

## Analogy

Opening a brand-new notebook instead of continuing the last one.

## Related Concepts

- [[persistent-session|Persistent Session]]
- [[session|Session]]

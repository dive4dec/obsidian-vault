---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Session

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A session is a persisted conversation with history, tools, and state, recorded in `dsh-session` as an append-only event-sourced log from which model history is derived. Sessions are in memory unless a persistence backend (e.g. `dsh-session-persistence-jsonl`) subscribes to the `session/event` feed, and are resumable — `dsh-agent-loop` resumes via `resumeSessionId`, and headless adopts one with `--session-id`. Compaction hides superseded entries from the active conversation without deleting them.

## Concrete Example

`ctx.sessions.create(sessionId, { meta: { cwd: '/workspace' } })` builds a live session bound to the calling fiber.

## Analogy

It is a durable chat transcript that survives the app closing — reopen it and the whole conversation is still there.

## Related Concepts

- [[turn|Turn]]
- [[memory|Memory]]
- [[context|Context]]

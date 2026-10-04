---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Fork a Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Forking starts a new session from a stable prefix of an existing one, so parallel work can share a common history. `ctx.sessions.fork()` creates a child from a live session's prefix, and the child's header records how much it inherited. This is the mechanism behind subagent forks that inherit a conversation.

## Concrete Example

The current format stores `isSeeded` in the header and derives the inherited cut from the last tagged `session/end-seed` marker; `inheritedEventCount` distinguishes inherited from owned events.

## Analogy

Branching a git history so two experiments share a common ancestor.

## Related Concepts

- [[session-fork|Session Fork]]
- [[session|Session]]
- [[turn-outline|Turn Outline]]

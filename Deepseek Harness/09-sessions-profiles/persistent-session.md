---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Persistent Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A persistent session is one whose event log is backed by a mounted persistence backend, so it survives across runs and can be resumed. With `dsh-session-checkpoint-policy`, work is durable before each model request and tool side effect, so an interrupted session resumes without loss. This is the default posture for production agent deployments.

## Concrete Example

Mount `dsh-session-persistence-jsonl` plus `dsh-session-checkpoint-policy`; the session's log is flushed at every checkpoint and reopened with `open(id, 'write')` on resume.

## Analogy

A game with autosave that keeps going between play sessions.

## Related Concepts

- [[session-persistence|Session Persistence]]
- [[session-restore|Restore a Session]]
- [[session|Session]]

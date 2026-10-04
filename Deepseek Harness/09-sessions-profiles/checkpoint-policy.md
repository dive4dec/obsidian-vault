---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Checkpoint Policy

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-checkpoint-policy` decides when the persistence store must be flushed so a persisted agent can survive a crash without losing a model request or a tool side effect. It is fail-closed: the adapter or top-level tool body does not run until the durable write succeeds. The package has no configuration; a backend stores the log while this policy schedules the checkpoints.

## Concrete Example

Three barriers are checkpointed: before the model request stream is constructed, before a top-level tool body runs, and at each `agent/pre-step` boundary; a rejected checkpoint aborts the step instead of proceeding.

## Analogy

An automatic save that triggers before every risky action in the game.

## Related Concepts

- [[checkpoint|Checkpoint]]
- [[session-persistence|Session Persistence]]
- [[resume|Resume]]

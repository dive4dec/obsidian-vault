---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Checkpoint

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A checkpoint is a durability point in a session where the event log is guaranteed to be flushed. After one, a crash can resume from the stored requests, tool calls, responses, and results without loss or redo. Checkpoints are what turn a best-effort append stream into a crash-safe record.

## Concrete Example

`dsh-session-checkpoint-policy` flushes the log before each model request, before each top-level tool call, and at every `agent/pre-step` boundary; unfinished assistant streams stay transient across a checkpoint.

## Analogy

A numbered save point you can always load back into.

## Related Concepts

- [[checkpoint-policy|Checkpoint Policy]]
- [[session-persistence|Session Persistence]]
- [[session-integrity|Session Integrity]]

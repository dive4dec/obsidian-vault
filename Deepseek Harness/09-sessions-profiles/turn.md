---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Turn

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A turn is one iteration of the agent loop inside a session: read context, call the model, and handle the response. In the durable log, a turn is the unit that checkpointing and format migration reason about, and a decoded `turn/end` marker settles it. Whole-session stats and the turn outline are both counted over these units.

## Concrete Example

`dsh-session-checkpoint-policy` flushes at each `agent/pre-step` boundary, and `dsh-session-stats` reports whole-session turn and step counts from the complete log.

## Analogy

One full back-and-forth exchange in a conversation.

## Related Concepts

- [[turn-outline|Turn Outline]]
- [[session|Session]]
- [[checkpoint-policy|Checkpoint Policy]]

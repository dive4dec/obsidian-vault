---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Turn

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A turn is one pass of the agent loop: read the current context, call the model, handle its response, and (if it requested tools) run them before the next pass. dsh treats a turn as a durable unit — it opens a turn, steps through model attempts and tool calls, and only closes it when the work settles, so the boundary is what you see in the Trajectory view.

## Concrete Example

Each `turn` in `dsh-agent-loop` opens a durable turn, runs steps, and emits a `turn/end` when it settles; tool calls or steering keep the same turn going.

## Analogy

One round of a conversation: you speak, the model acts, then it's your go again.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[max-turns|Max Turns]]
- [[goal-round|Goal Round]]
- [[trajectory|Trajectory]]

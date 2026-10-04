---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Context Inheritance

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Context inheritance is how a forked child picks up the parent's completed conversation. `dsh-subagent-fork-in-process` seeds the child with a one-time snapshot of the parent's finished turns, so the child builds on the conversation without duplicating it — while a spawn child inherits none of it and starts empty.

## Concrete Example

Fork passes the parent's completed-turn prefix to `dsh-subagent-in-process-driver`; the seed is taken at fork time and later parent turns never reach the child.

## Analogy

A new hire who reads the full thread first, then continues where the team left off.

## Related Concepts

- [[subagent-fork|Fork Subagent]]
- [[subagent-spawn|Spawn Subagent]]
- [[agent-context|Agent Context]]

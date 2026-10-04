---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Goal

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A goal is a single durable completion objective that persists across turns, session resume, fork, and process restarts. `dsh-goal` lets you create, edit, pause, resume, complete, block, or clear it, with compare-and-set updates that reject stale views. A configurable round cap (256 by default) bounds automatic continuation; it stores goal state but does not schedule work.

## Concrete Example

`dsh-goal` keeps one objective per session; a blocked goal retains a stable policy code plus a human-readable explanation, and continuation permission stays process-local.

## Analogy

A standing order that survives restarts: keep working toward this one objective until done or blocked.

## Related Concepts

- [[goal-driver|Goal Round Driver]]
- [[goal-round|Goal Round]]
- [[agent-state|Agent State]]

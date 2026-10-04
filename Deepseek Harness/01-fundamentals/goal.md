---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Goal

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A goal is a persisted objective that drives an agent across multiple continuation rounds. `dsh-goal` lets one long-running completion objective persist across turns, session resume, fork, and process restarts; users and agents can create, edit, pause, resume, complete, block, or clear it, with compare-and-set updates rejecting stale views. A configurable round cap (256 by default) bounds automatic continuation, and blocked goals retain a stable policy code. The package stores goal state but does not schedule work.

## Concrete Example

`dsh-goal` persists one durable completion objective per session; a blocked goal keeps a human-readable explanation.

## Analogy

It is a mission statement pinned above the desk that survives a shift change and a building move.

## Related Concepts

- [[session|Session]]
- [[agent-loop|Agent Loop]]
- [[plan-mode|Plan Mode]]

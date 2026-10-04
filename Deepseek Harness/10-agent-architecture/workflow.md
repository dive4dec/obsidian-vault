---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Workflow

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A workflow is a plain-JavaScript orchestration script that fans work out to subagents and returns the script's final JSON value. `dsh-workflow` exposes `agent()`, `parallel()`, `pipeline()`, `phase()`, and `log()` hooks, and models normally reach them through the `workflow` tool. Each run belongs to its caller, attributes every child to the invoking agent, and the caller supplies the execution engine.

## Concrete Example

The `workflow` tool runs a script using `agent()` to spawn subagents and `pipeline(items, ...stages)` to stream items through stages independently.

## Analogy

A conductor's score telling many musicians when to play, then collecting the final recording.

## Related Concepts

- [[parallel|Parallel]]
- [[pipeline|Pipeline]]
- [[workflow-ptc|Workflow PTC]]
- [[agent-delegation|Delegation]]

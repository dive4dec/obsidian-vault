---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# In-Process

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

In-process subagents run as child agents in the same process, sharing the parent's agent factory, LLM, and tool services. This is the cheapest delegation transport — no separate runtime to spawn or a protocol to cross — and it is what both the spawn and fork backends use.

## Concrete Example

`dsh-subagent-spawn-in-process` and `dsh-subagent-fork-in-process` both run children in-process through the shared `dsh-subagent-in-process-driver`.

## Analogy

A coworker at the same desk sharing the same toolbox, not a remote contractor.

## Related Concepts

- [[subagent-spawn|Spawn Subagent]]
- [[subagent-fork|Fork Subagent]]
- [[subagent-driver|Subagent Driver]]

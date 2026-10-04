---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Spawn Subagent

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The spawn backend runs each delegated task in a fresh child agent that shares the parent process and its agent factory, LLM, and tool services. Because the child starts with an empty conversation, its task prompt must stand alone; it inherits the parent's working directory, session lineage, provider, model, and reasoning effort unless `request.agentOptions` overrides them.

## Concrete Example

`dsh-subagent-spawn-in-process` is reached under the `spawn` provider name — the cheapest delegation transport; reach for the fork backend when the child must build on the parent's completed turns.

## Analogy

Starting a fresh coworker from scratch who reads only the ticket you hand them.

## Related Concepts

- [[subagent|Subagent]]
- [[subagent-fork|Fork Subagent]]
- [[subagent-driver|Subagent Driver]]
- [[in-process|In-Process]]

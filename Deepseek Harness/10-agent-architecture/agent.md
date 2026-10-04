---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

An agent is the unit that actually executes a task: it owns a model, tools, and conversation state, and produces a result. In dsh the `dsh-agent` package exposes the public `Agent` handle — create or resume a live agent, send steering input, cancel work, and observe activity — but it does not create model calls itself; you pair it with a driver.

## Concrete Example

`ctx.agents.create()` builds a fresh agent and `ctx.agents.resume(id)` reopens a persisted one; the agent then runs under a driver such as `dsh-agent-loop`.

## Analogy

A worker on a ticket — given a model, tools, and the history, it does the job and reports back.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[agent-lifecycle|Agent Lifecycle]]
- [[agent-state|Agent State]]
- [[agent-context|Agent Context]]

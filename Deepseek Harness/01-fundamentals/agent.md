---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Agent

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

An agent is the core unit that executes a task: it pairs a model, a tool set, and a session, and is driven to completion by the loop. `dsh-base` gives every base-backed profile a model connection, the full tool set, durable session history, and workspace safety defaults out of the box. Developers interact with agents through `ctx.agents.create()` and `ctx.agents.resume()`, which return an `AgentHandle` whose `dispose()` owns teardown. Choosing the standard "call model, run tools, repeat" lifecycle covers most needs; a custom `Agent` implementation is for the rest.

## Concrete Example

```ts
const handle = await ctx.agents.create({
  sessionId,
  agentOptions: { provider: 'deepseek', model: 'deepseek-chat' },
})
```

## Analogy

It is a worker with a toolbox, a task list, and a memory of what happened so far.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[model|Model]]
- [[tool-calling|Tool Calling]]

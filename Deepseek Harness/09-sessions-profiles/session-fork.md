---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Fork

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-subagent-fork-in-process` runs a forked subagent inside the same process, seeding it with the parent conversation's completed turns. The forked agent returns its result, not intermediate steps, while the parent keeps its own session. This is how dsh offloads context-heavy follow-up work without consuming the parent's context.

## Concrete Example

A fork inherits the parent's session prefix (the seeded cut), runs in-process, and the parent receives only the final result when the run settles.

## Analogy

A junior colleague who reads the shared briefing, works in parallel, and reports back only the conclusion.

## Related Concepts

- [[fork|Fork a Session]]
- [[session|Session]]

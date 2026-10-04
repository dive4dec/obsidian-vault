---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Parallel

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

`parallel` is a workflow hook for fanning out independent work: it runs zero-argument functions concurrently and awaits all of them. Use it when a stage genuinely needs every prior result together; for independent per-item work, prefer `pipeline`, which has no barrier between stages.

## Concrete Example

`parallel(thunks)` in a `dsh-workflow` script starts several subagents at once and waits for all to settle before continuing.

## Analogy

Starting several tasks at once and waiting for the whole batch to finish.

## Related Concepts

- [[pipeline|Pipeline]]
- [[workflow|Workflow]]
- [[concurrent-agents|Concurrent Agents]]

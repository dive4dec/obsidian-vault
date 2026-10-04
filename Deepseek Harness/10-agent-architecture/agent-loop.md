---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Loop

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The agent loop is the default driver that turns an agent into working behavior: think, call the model, run any requested tools, observe results, and repeat until the task is done or it is stopped. `dsh-agent-loop` creates fresh agents or resumes persisted sessions and drives each turn through model requests, streamed responses, tool execution, and durable history.

## Concrete Example

Mount `@deepseek-ai/dsh-agent-loop` in a composition; `maxParallelToolCalls` bounds concurrent parallel-safe calls while exclusive calls keep ordering.

## Analogy

A while loop: do the step, look at the result, and decide whether to go around again.

## Related Concepts

- [[turn|Turn]]
- [[agent|Agent]]
- [[max-turns|Max Turns]]
- [[agent-error|Agent Error]]

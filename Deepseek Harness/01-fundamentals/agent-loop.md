---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Agent Loop

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-agent-loop` is the default agent driver: it creates fresh agents or resumes persisted sessions, then drives each turn through model requests, streamed responses, tool execution, and durable session history. Each step sends the session's derived history and visible tool schemas to the model, runs the model's tool calls through the guarded tool pipeline, and appends every accepted fact to the session log before the next step. `maxParallelToolCalls` (default 10) bounds concurrent parallel-safe calls, and exclusive calls run alone as ordering barriers.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-agent-loop'
  config:
    maxParallelToolCalls: 10
    agents:
      - id: 'main'
        provider: deepseek
        model: deepseek-chat
```

## Analogy

It is a think–act–observe heartbeat: look, do something, see the result, repeat until done.

## Related Concepts

- [[turn|Turn]]
- [[tool-calling|Tool Calling]]
- [[agent|Agent]]

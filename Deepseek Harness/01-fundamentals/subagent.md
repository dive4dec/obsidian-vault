---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Subagent

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A subagent is a child agent dsh spawns for a scoped task, delegated through `dsh-subagent` plus a provider backend and the `dsh-tool-subagent` tool. One-shot children run once and settle with a single result — the parent sees the final answer, not intermediate steps; continuable children keep a durable session and accept later messages. `maxDepth` defaults to 1 (direct children only), and each child's permission scope is fixed when it starts and cannot be widened from inside.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-tool-subagent'
  config:
    provider: spawn
    toolName: subagent
```

## Analogy

It is handing a side quest to an apprentice who reports back only the finished result.

## Related Concepts

- [[agent|Agent]]
- [[tool-calling|Tool Calling]]
- [[acp|ACP]]

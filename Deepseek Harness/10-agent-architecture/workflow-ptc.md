---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Workflow PTC

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Workflow PTC runs JavaScript workflows through the shared sandboxed PTC Node process runtime, with workflow hooks, subagent routing, and caller-owned cancellation. `dsh-workflow-ptc` keeps the `agent()`, `parallel()`, `pipeline()`, `phase()`, and `log()` hooks while subagents perform delegated work, under the calling session's file sandbox policy.

## Concrete Example

A workflow run executes in fresh Node processes; there is no overall elapsed deadline, and cancellation stops the managed process and disposes child agents.

## Analogy

The sandboxed rehearsal stage where the conductor's score is actually performed.

## Related Concepts

- [[workflow|Workflow]]
- [[ptc-runtime|PTC Runtime]]
- [[parallel|Parallel]]

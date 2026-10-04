---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Concurrent Agents

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Concurrent agents are multiple agents running at once — a parent with live children, a team of named teammates, or a workflow fanning out many subagents. dsh bounds this with the `maxActiveSubagents` pool (default 8) for continuable children and a `maxDepth` that limits how deep delegation can nest.

## Concrete Example

A workflow `parallel()` call runs several subagents at once, and an Agent Team keeps a Lead plus named teammates active in one session.

## Analogy

A floor full of workers on different tickets at the same time.

## Related Concepts

- [[agent-team|Agent Team]]
- [[parallel|Parallel]]
- [[subagent-control|Subagent Control]]
- [[agent-delegation|Delegation]]

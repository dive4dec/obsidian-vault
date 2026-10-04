---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Subagent

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A subagent is a child agent the parent delegates a scoped task to; it returns its result, not its intermediate steps. `dsh-subagent` is the delegation seam — a named-provider registry where backends (in-process, ACP, SDK, Codex, Claude Code) register by name and a request picks one. Choose one-shot children for a single result or continuable children for later messages and interruption.

## Concrete Example

Mount `dsh-subagent` plus a backend like `dsh-subagent-spawn-in-process` and a tool (`dsh-tool-subagent`, `provider: spawn`); the child's final answer comes back as the tool result.

## Analogy

Handing a side task to a coworker and only hearing back their final answer.

## Related Concepts

- [[subagent-spawn|Spawn Subagent]]
- [[subagent-fork|Fork Subagent]]
- [[subagent-control|Subagent Control]]
- [[result-return|Result Return]]

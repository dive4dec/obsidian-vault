---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Subagent Driver

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The driver is the shared run lifecycle behind both in-process subagent backends: it creates one child agent through the host's agent factory, applies per-child customization, drives one task to completion, and returns the child's own final output with a single quiescent disposal path. It is a library, not a standalone feature — provider backends call `startInProcessRun` and nothing in a composition configures it directly.

## Concrete Example

Spawn calls `dsh-subagent-in-process-driver` with no session seed; fork calls it with the parent's completed-turn prefix — the same driver either way.

## Analogy

The assembly-line station both coworker variants pass through before returning their result.

## Related Concepts

- [[subagent-spawn|Spawn Subagent]]
- [[subagent-fork|Fork Subagent]]
- [[agent-lifecycle|Agent Lifecycle]]

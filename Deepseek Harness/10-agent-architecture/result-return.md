---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Result Return

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A subagent returns its result, not its intermediate steps. The child's final output — plus an optional structured value, a stop reason, and an optional safe diagnostic on failure — is what the parent receives as the tool result. This keeps the parent's context small: it gets the answer, not the whole trail of work.

## Concrete Example

A one-shot child run settles with a single result; the parent's session log then records a settlement notice with the child's final text blocks.

## Analogy

Getting just the finished report from a coworker, not a play-by-play of how they made it.

## Related Concepts

- [[subagent|Subagent]]
- [[subagent-driver|Subagent Driver]]
- [[agent-delegation|Delegation]]

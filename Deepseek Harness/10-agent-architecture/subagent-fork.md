---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Fork Subagent

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The fork backend seeds each child with the parent's completed conversation turns, so follow-up work builds on the conversation without duplicating it. The child sees every finished turn and none of the in-flight one; the seed is a one-time snapshot taken at fork time, so later parent turns never reach the child.

## Concrete Example

`dsh-subagent-fork-in-process` is reached under the `fork` provider name and matches the spawn backend except for the session seed — choose it when a subtask continues this conversation.

## Analogy

A coworker who first reads the whole thread before taking over the next step.

## Related Concepts

- [[subagent|Subagent]]
- [[subagent-spawn|Spawn Subagent]]
- [[context-inherit|Context Inheritance]]
- [[subagent-driver|Subagent Driver]]

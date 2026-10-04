---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Persona

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A persona gives one agent its own identity and tone, layered on top of the system prompt. `dsh-persona` is a composable row a preset mounts to register persona prefix and suffix sections that shadow the deployment-wide defaults for that session; it can also make the prefix the session's complete system prompt or turn off dynamic runtime-context snapshots.

## Concrete Example

Mount the `dsh-persona` row inside an agent preset composition so that preset's agents get a distinct identity — mounting it globally collides with the prompt registry and fails loud.

## Analogy

A character sheet that changes how the same worker behaves, without changing the job.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[agent-preset|Agent Preset]]
- [[agent-prompt|Agent Prompt]]

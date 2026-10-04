---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Config

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Agent config is how an agent's behavior is set: its preset, model route, persona, instructions, and limits. These are usually live Config fields — the deployment default model, a preset's child plugins, or a loop's `maxParallelToolCalls` — that shape what a freshly created agent does.

## Concrete Example

`dsh-agent-default-model` exposes `provider` and `model` as live Config fields, and a `dsh-agent-preset` row declares the child plugins an agent composes.

## Analogy

The settings screen for a worker: which model, which preset, which limits.

## Related Concepts

- [[agent-preset|Agent Preset]]
- [[default-model|Default Model]]
- [[preset-registry|Preset Registry]]
- [[auto-review|Auto Review]]

---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Safety

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Agent safety is the set of guardrails around agent behavior: sandbox and approval policies that gate operations, the Auto review layer that assesses each tool call, and the fixed permission scope of a delegated subagent that cannot be widened from inside its session. These bounds are what keep a fully-permitted agent from overstepping.

## Concrete Example

A delegated subagent's runtime-context snapshot carries the delegation-scope statement: its permission scope is fixed at start, and operations needing approval are rejected automatically.

## Analogy

Handcuffs, checkpoints, and a supervisor — the controls that keep a worker inside the line.

## Related Concepts

- [[auto-review|Auto Review]]
- [[user-questions|User Questions]]
- [[max-turns|Max Turns]]
- [[ptc-runtime|PTC Runtime]]

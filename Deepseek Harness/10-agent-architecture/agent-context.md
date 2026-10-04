---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Context

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Agent context is what an agent operates on: the assembled system prompt, runtime context, instructions, and the conversation it reasons over. The loop projects runtime context each step and reconciles the rendered prompt against the surviving history, so the context is the boundary between what the agent knows and what it sends to the model.

## Concrete Example

`dsh-system-prompt` plus `dsh-agent-instructions` and the session's message history together form the context `dsh-agent-loop` sends on each step.

## Analogy

Everything in the worker's head at the moment they act.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[agent-state|Agent State]]
- [[agent-prompt|Agent Prompt]]
- [[context-inherit|Context Inheritance]]

---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Prompt

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The agent prompt is the prompt an agent is seeded with to start a run: the assembled system prompt plus the task it should do. It is what a fresh (spawn) child receives as its entire conversation, so for in-process spawn the task prompt must stand alone, while a fork child also gets the parent's completed turns.

## Concrete Example

A spawn subagent is seeded with a self-contained task prompt; `dsh-system-prompt` supplies the framing prompt sections around it.

## Analogy

The first line of the ticket: the brief the worker reads before doing anything.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[subagent-spawn|Spawn Subagent]]
- [[agent-instructions|Agent Instructions]]
- [[persona|Persona]]

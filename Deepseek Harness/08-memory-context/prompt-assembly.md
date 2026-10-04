---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Prompt Assembly

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Building the model-facing prompt from its parts. `dsh-system-prompt` assembles one ordered system prompt plus the available tool schemas for each model step, and `dsh-agent-instructions` prepends the workspace instruction chain. Assembly is deterministic and fails on an invalid combination or an unresolved variable rather than sending a malformed prompt.

## Concrete Example

`ctx.systemPrompt` is the registry every prompt contribution lands in; the config owns the fixed opener, runtime context, persona prefix/suffix, and tool order, and agent-scoped contributions override same-named global defaults.

## Analogy

Assembling a brief before a presentation — a fixed opening, the room-specific notes, and the data in a decided order, so nothing is missing and nothing is said twice.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[instructions|Instructions]]
- [[time-context|Time Context]]
- [[role-play|System Role]]

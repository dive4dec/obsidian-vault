---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Time Context

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-time-context` injects per-step clock context — the current time, browser zone, and elapsed time — into the model-facing prompt so the agent can reason about "now" and about how long it has been running. It is one of the dynamic runtime facts assembled by `dsh-system-prompt`.

## Concrete Example

On each step, `dsh-time-context` contributes the current time and elapsed time as a runtime fact in the system prompt, so the agent can say "five minutes into the run."

## Analogy

A clock on the wall of the room — it gives the agent a sense of the current moment without it having to ask.

## Related Concepts

- [[prompt-assembly|Prompt Assembly]]
- [[system-prompt|System Prompt]]
- [[tmux-context|Tmux Context]]

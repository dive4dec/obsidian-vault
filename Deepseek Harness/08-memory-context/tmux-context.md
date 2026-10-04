---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Tmux Context

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-tmux-context` is an opt-in per-turn terminal context that gives the agent awareness of its tmux session, window, and pane. It is a small, on-demand slice of environment context added when a profile enables it, similar in spirit to `dsh-time-context`.

## Concrete Example

When enabled, `dsh-tmux-context` adds the current tmux session, window, and pane identifiers to the turn's context so the agent can reason about where it is running.

## Analogy

A desk placard noting which room and which desk you're sitting at.

## Related Concepts

- [[time-context|Time Context]]
- [[workspace-context|Workspace Context]]
- [[prompt-assembly|Prompt Assembly]]

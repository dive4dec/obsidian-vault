---
tags: [DSH-Configuration]
domain: Configuration
---

# Terminal Config

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-terminal` provides persistent, owner-scoped terminal sessions to the harness: a session keeps shell or REPL state across tool calls, and every operation is fenced to the exact agent that created it. The `ctx.terminals` service mints opaque session ids and routes session creation through registered backends, with the shipped `dsh-terminal-bash` owning spawning and readiness. Sessions are process-local and do not survive a harness restart.

## Concrete Example

A persistent bash terminal keeps its exported variables and working directory across consecutive tool calls within the same session.

## Analogy

It is a per-agent, persistent shell that dies with the process but not with a tool call.

## Related Concepts

- [[shell-env|Shell Environment]]
- [[settings-shell|Shell Settings]]

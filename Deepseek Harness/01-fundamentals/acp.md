---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# ACP

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The ACP profile serves automation clients over ACP (Agent Client Protocol) stdio until disconnect. The `@deepseek-ai/dsh-acp-app` bundle is a profile over `dsh-base` that sets the coding-agent persona and default model route and starts `dsh-acp` only after its app-owned command provider accepts the invocation, so `dsh --profile acp --help` prints help and exits without claiming stdin or stdout. Developers care because it is the automation entry point for external clients.

## Concrete Example

`dsh --profile acp` serves automation clients over ACP stdio until disconnect.

## Analogy

It is a ticketed service desk for automation: clients queue requests and receive responses over a wire.

## Related Concepts

- [[sdk|SDK]]
- [[entry-modes|Entry Modes]]
- [[subagent|Subagent]]

---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Auto Review

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Auto review is an experimental per-call safety layer for a Web profile. Before each native or PTC inner tool call, the current agent's provider and model assess the pending action: an allowed call executes with Full access, and a denied call asks the user. The dsh installation ships it switched off, and it is experimental — it can allow unsafe actions, deny useful work, and spend extra tokens.

## Concrete Example

The `dsh-experimental-auto-review` bundle adds Auto review to the current-session permission pickers; switch it on from the Web sidebar's Plugins page.

## Analogy

A supervisor who eyeballs each action before letting a fully-permitted worker take it.

## Related Concepts

- [[agent-safety|Agent Safety]]
- [[user-questions|User Questions]]
- [[agent-config|Agent Config]]

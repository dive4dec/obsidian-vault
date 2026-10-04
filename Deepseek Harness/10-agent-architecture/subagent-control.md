---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Subagent Control

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Control is how a parent steers its live continuable children after they start. `dsh-tool-subagent-control` adds the global control tools: `send_message` steers between a direct parent and child, `interrupt_agent` stops a child's current turn while keeping its inbox and descendants intact, and `list_agents` lists continuable children by durable id and label.

## Concrete Example

`send_message` delivers a message to a direct child (or a child to its parent); `interrupt_agent` cancels a running child without destroying it; `list_agents` enumerates live children.

## Analogy

The walkie-talkie between a lead and the workers they started — send notes, call a timeout, or roll the roster.

## Related Concepts

- [[subagent|Subagent]]
- [[concurrent-agents|Concurrent Agents]]
- [[agent-delegation|Delegation]]
- [[result-return|Result Return]]

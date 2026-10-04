---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Delegation

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Delegation is the act of offloading a scoped piece of work to a subagent so the parent stays focused. `dsh-subagent` routes each delegation request to a named provider, the model-facing tool triggers it, and the depth and capacity settings bound how much can be delegated at once.

## Concrete Example

The `subagent` tool (`dsh-tool-subagent` with `provider: spawn`) sends a self-contained task to a child and returns its final answer.

## Analogy

Assigning a side quest to a coworker so the main quest keeps moving.

## Related Concepts

- [[subagent|Subagent]]
- [[result-return|Result Return]]
- [[workflow|Workflow]]
- [[concurrent-agents|Concurrent Agents]]

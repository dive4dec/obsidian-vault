---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# max_spawn_depth

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

This limits how many levels deep agents can spawn sub-agents, preventing infinite chains.

## Concrete Example

Depth 2 means the main agent can spawn a sub-agent, and that sub-agent can spawn one more, but no deeper.

## Analogy

Like a family tree limit: you can have children and grandchildren but no great-grandchildren.

## Related Concepts

- [[delegate_task|delegate_task]]
- [[leaf-vs-orchestrator-role|leaf vs orchestrator role]]
- [[max_concurrent_children|max_concurrent_children]]

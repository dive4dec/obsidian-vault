---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# max_concurrent_children

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

This limits how many sub-agents can run at the same time, preventing resource overload.

## Concrete Example

With a limit of 3, the orchestrator can run 3 sub-agents in parallel. A 4th must wait until one finishes.

## Analogy

Like a classroom with 3 computers: only 3 students can use them at once, others wait their turn.

## Related Concepts

- [[delegate_task|delegate_task]]
- [[max_spawn_depth|max_spawn_depth]]
- [[background-tasks|background tasks]]

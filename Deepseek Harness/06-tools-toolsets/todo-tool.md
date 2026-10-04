---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Todo Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-todo gives the agent a structured task list: break multi-step work into concrete tasks, mark what is in progress, and check items off. Each update replaces the whole list, only the owning agent session can change it, and the list survives across turns and reopened sessions. The required allowParallelInProgress flag decides whether several tasks may be in_progress at once.

## Concrete Example

todo_write todos=[{content:"Read spec", status:"completed"}, {content:"Write notes", status:"in_progress"}] replaces the current list.

## Analogy

A sticky note board the agent rewrites whole each time the plan changes.

## Related Concepts

- [[goal-tool|Goal Tool]]
- [[tool|Tool]]
- [[delegation|Delegation]]

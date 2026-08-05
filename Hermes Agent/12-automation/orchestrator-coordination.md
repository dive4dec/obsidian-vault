---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# Orchestrator Coordination

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

The orchestrator agent coordinates multiple sub-agents, assigning tasks and collecting their results.

## Concrete Example

The orchestrator sends 3 tasks to 3 workers, waits for all to finish, then combines their outputs into one report.

## Analogy

Like a project manager who assigns work to 3 team members and compiles their parts into the final report.

## Related Concepts

- [[delegate_task|delegate_task]]
- [[leaf-vs-orchestrator-role|leaf vs orchestrator role]]
- [[max_concurrent_children|max_concurrent_children]]

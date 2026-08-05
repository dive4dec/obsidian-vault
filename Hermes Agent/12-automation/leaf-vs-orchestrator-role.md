---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# leaf vs orchestrator role

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

A leaf agent does tasks directly. An orchestrator agent delegates tasks to leaf agents and coordinates results.

## Concrete Example

The orchestrator breaks a big project into parts and delegates each to a leaf agent, then combines the results.

## Analogy

Like a conductor (orchestrator) who does not play an instrument but directs the musicians (leaves) who do.

## Related Concepts

- [[delegate_task|delegate_task]]
- [[delegation-config|Delegation Config]]
- [[max_concurrent_children|max_concurrent_children]]

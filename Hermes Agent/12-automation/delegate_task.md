---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# delegate_task

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

This tool lets the agent spawn a sub-agent to handle a task independently, then report back.

## Concrete Example

The main agent delegates write unit tests to a sub-agent while it continues working on the main code.

## Analogy

Like a manager assigning tasks to team members and collecting their reports later.

## Related Concepts

- [[delegation-config|delegation config]]
- [[leaf-vs-orchestrator-role|leaf vs orchestrator role]]
- [[background-tasks|background tasks]]

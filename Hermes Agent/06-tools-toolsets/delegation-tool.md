---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Delegation Tool

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool for spawning subagents. The model can delegate tasks to isolated subagents.

## Concrete Example

delegate_task(goal=Debug the auth module, context=File: auth.py). A subagent is spawned. It works in isolation. Result returned when done.

## Analogy

A manager delegating tasks to team members - each works independently. The delegation tool lets the model spawn subagents.

## Related Concepts

- [[toolsets|Toolsets]]
- [[delegate-task|Delegate Task]]
- [[subagent|Subagent]]

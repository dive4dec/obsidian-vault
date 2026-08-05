---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Delegation Tool

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

Hermes can spawn sub-agents to work on sub-tasks in parallel. This is called delegation. The parent agent waits for the children to finish, then combines their results.

## Concrete Example

You ask Hermes to research three phone models. It spawns three sub-agents, each researching one phone, then merges the comparisons.

## Analogy

Like a group project where the leader splits the work among teammates, then collects everyone's parts.

## Related Concepts

- [[autonomous-agent|Autonomous Agent]]
- [[agent-loop|Agent Loop]]
- [[max-turns|Max Turns]]

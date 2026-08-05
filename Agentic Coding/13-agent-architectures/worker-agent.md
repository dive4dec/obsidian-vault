---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Worker Agent

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

A specialized agent that receives tasks from an orchestrator, does the work, and returns results.

## 📋 Concrete Example

Orchestrator: 'Write a Python function to sort a list.' Worker: writes the function, tests it, returns: 'def sort_list(lst): return sorted(lst) # Tested with 5 cases, all pass.'

## 🔗 Analogy

A construction worker receiving instructions from the foreman - 'build a wall here.' The worker builds it and reports back. Worker agents execute specific tasks assigned by the orchestrator.

## Related Concepts

- [[orchestrator-agent|Orchestrator Agent]]
- [[hierarchical-agent|Hierarchical Agent]]
- [[task-assignment|Task Assignment]]

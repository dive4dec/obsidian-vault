---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Sub-Agent

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

A smaller, focused agent spawned by a parent agent for a specific sub-task. It reports back and then terminates.

## 📋 Concrete Example

Parent: 'Research AI trends.' Spawns Sub-Agent A: 'Find 2024 AI papers.' Sub-Agent B: 'Find AI startup funding.' Each returns results. Parent combines them.

## 🔗 Analogy

A manager delegating to interns - 'you research competitors, you research market size.' Each intern (sub-agent) does focused research and reports back. The manager combines the findings.

## Related Concepts

- [[hierarchical-agent|Hierarchical Agent]]
- [[task-decomposition|Task Decomposition]]
- [[worker-agent|Worker Agent]]

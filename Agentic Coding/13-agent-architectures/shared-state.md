---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Shared State

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

A common data store that multiple agents can read and write to, enabling coordination without direct communication.

## 📋 Concrete Example

Shared state: {`task`: 'build app', `design`: `done`, `code`: `in_progress`, `tests`: `pending`}. All agents can see the overall progress and know what to work on next.

## 🔗 Analogy

A shared Google Doc - multiple people edit simultaneously. Everyone sees what others have written. No need to email updates. Shared state lets agents coordinate through a common data store.

## Related Concepts

- [[blackboard-architecture|Blackboard Architecture]]
- [[multi-agent-coordination|Multi-Agent Coordination]]
- [[agent-memory|Agent Memory]]

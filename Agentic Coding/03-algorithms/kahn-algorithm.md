---
tags: [Algorithms]
domain: Algorithms
---

# Kahn Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A topological sort algorithm that repeatedly removes nodes with no incoming edges (in-degree zero). Detects cycles if any nodes remain.

## 📋 Concrete Example

Start with courses that have no prerequisites. Take them, remove them, and new courses may now have no prerequisites. Repeat. If courses remain, there is a cycle.

## 🔗 Analogy

A graduation checklist: start with tasks that have no dependencies. Complete them, which may unlock new tasks. If tasks remain stuck, there is a circular dependency (impossible to graduate).

## Related Concepts

- [[topological-sort|Topological Sort]]
- [[in-degree|In-Degree]]
- [[dag|DAG]]
- [[bfs|BFS]]

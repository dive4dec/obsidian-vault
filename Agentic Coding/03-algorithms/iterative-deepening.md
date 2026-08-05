---
tags: [Algorithms]
domain: Algorithms
---

# Iterative Deepening

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Run DFS with increasing depth limits: depth 1, then 2, then 3... Combines DFS memory efficiency with BFS completeness. Used in game tree search.

## 📋 Concrete Example

Looking for a lost item at home: search 1 room, then 2 rooms, then 3 rooms... You revisit rooms, but you find the item at the shallowest depth, like BFS, using DFS memory.

## 🔗 Analogy

Searching for a book on shelves: you check the first shelf, then the first two shelves, then the first three. You re-check earlier shelves, but you find the nearest book first.

## Related Concepts

- [[dfs|DFS]]
- [[bfs|BFS]]
- [[search-depth|Search Depth]]
- [[game-tree-search|Game Tree Search]]

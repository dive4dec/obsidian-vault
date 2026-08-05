---
tags: [Algorithms]
domain: Algorithms
---

# Tarjan Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

An efficient single-pass algorithm to find all SCCs in a directed graph using DFS and a low-link value. O(V + E).

## 📋 Concrete Example

Using DFS, Tarjan tracks the 'discovery time' and `low-link` (smallest reachable time) of each node. When a node's low-link equals its own time, it is the root of an SCC.

## 🔗 Analogy

An inspector walking through a building who marks each room with an entry time. When they find a room whose earliest reachable room is itself, they know they have found a self-contained wing (SCC).

## Related Concepts

- [[strongly-connected-components|Strongly Connected Components]]
- [[dfs|DFS]]
- [[low-link-value|Low-Link Value]]
- [[directed-graph|Directed Graph]]

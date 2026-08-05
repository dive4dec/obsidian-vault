---
tags: [Algorithms]
domain: Algorithms
---

# Prim Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Find the MST by starting from any node and always adding the cheapest edge that connects a new node to the growing tree.

## 📋 Concrete Example

Start at office A. Add cheapest cable to B. Now from {A, B}, add cheapest cable to a new office C. Repeat until all offices are connected.

## 🔗 Analogy

Growing a puddle of water: you start at one point and spread outward, always absorbing the nearest dry area. The puddle grows to cover everything at minimum cost.

## Related Concepts

- [[minimum-spanning-tree|Minimum Spanning Tree]]
- [[greedy-algorithm|Greedy Algorithm]]
- [[kruskal-algorithm|Kruskal Algorithm]]
- [[priority-queue|Priority Queue]]

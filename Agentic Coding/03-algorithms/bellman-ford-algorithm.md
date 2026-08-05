---
tags: [Algorithms]
domain: Algorithms
---

# Bellman-Ford Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Like Dijkstra but handles graphs with negative edge weights. Slower (O(VE)) but more versatile. Can detect negative cycles.

## 📋 Concrete Example

If a graph has edges with negative weights (e.g., discounts or refunds), Dijkstra fails. Bellman-Ford relaxes all edges V-1 times and still finds shortest paths.

## 🔗 Analogy

A GPS that accounts for roads where you actually gain time (downhill with wind assist = negative time). Dijkstra cannot handle these, but Bellman-Ford can.

## Related Concepts

- [[shortest-path|Shortest Path]]
- [[negative-weights|Negative Weights]]
- [[edge-relaxation|Edge Relaxation]]
- [[negative-cycle-detection|Negative Cycle Detection]]

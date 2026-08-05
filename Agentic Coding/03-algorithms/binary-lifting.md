---
tags: [Algorithms]
domain: Algorithms
---

# Binary Lifting

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Precompute ancestors at power-of-two distances to answer 'k-th ancestor' queries in O(log n). Used in trees and the LCA problem.

## 📋 Concrete Example

For each node, store its 1st, 2nd, 4th, 8th... ancestor. To find the 13th ancestor: jump 8, then 4, then 1. Three jumps instead of 13 steps.

## 🔗 Analogy

A delivery service with hubs at 1km, 2km, 4km, 8km distances. To deliver 13km away, you hop to the 8km hub, then 4km hub, then walk 1km. Far fewer stops than walking every kilometre.

## Related Concepts

- [[tree|Tree]]
- [[lca|LCA]]
- [[power-of-two|Power of Two]]
- [[sparse-table|Sparse Table]]

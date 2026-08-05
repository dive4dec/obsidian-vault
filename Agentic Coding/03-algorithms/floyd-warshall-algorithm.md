---
tags: [Algorithms]
domain: Algorithms
---

# Floyd-Warshall Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Compute shortest paths between all pairs of nodes in one algorithm. Handles negative weights (but not cycles). O(n^3) but simple to implement.

## 📋 Concrete Example

For each intermediate node k, check if going through k shortens the path from i to j. After checking all intermediates, you have all-pairs shortest paths.

## 🔗 Analogy

A delivery company computing the fastest route between every pair of depots. For each potential stopover, they check if it makes any route faster. After all stopovers, every route is optimal.

## Related Concepts

- [[all-pairs-shortest-path|All-Pairs Shortest Path]]
- [[dynamic-programming|Dynamic Programming]]
- [[negative-weights|Negative Weights]]
- [[transitive-closure|Transitive Closure]]

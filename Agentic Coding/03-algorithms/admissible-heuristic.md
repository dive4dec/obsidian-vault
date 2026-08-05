---
tags: [Algorithms]
domain: Algorithms
---

# Admissible Heuristic

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A heuristic that never overestimates the true cost. Required for A* to guarantee an optimal solution.

## 📋 Concrete Example

Straight-line distance is admissible for road distance: the real road can only be longer or equal, never shorter. A* with this heuristic guarantees the shortest path.

## 🔗 Analogy

A delivery estimate that says 'at least 30 minutes.' The real time might be 40, but it is never less. This underestimate ensures you do not miss the optimal route.

## Related Concepts

- [[heuristic|Heuristic]]
- [[a-star-algorithm|A-Star Algorithm]]
- [[optimality|Optimality]]
- [[underestimate|Underestimate]]

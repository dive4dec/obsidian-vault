---
tags: [Algorithms]
domain: Algorithms
---

# Branch and Bound

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Explore possible solutions but prune branches that cannot improve the current best. Used for optimisation problems like TSP.

## 📋 Concrete Example

Solving a puzzle: you try a path, but if the partial solution is already worse than your best complete solution, you abandon it. You prune branches that cannot win.

## 🔗 Analogy

A chess player who sees that a line of moves leads to a worse position than another line they already found. They stop analysing the worse line and focus on the better one.

## Related Concepts

- [[backtracking|Backtracking]]
- [[pruning|Pruning]]
- [[optimisation|Optimisation]]
- [[travelling-salesman|Travelling Salesman]]

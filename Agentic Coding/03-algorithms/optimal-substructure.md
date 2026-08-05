---
tags: [Algorithms]
domain: Algorithms
---

# Optimal Substructure

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A problem has optimal substructure if an optimal solution contains optimal solutions to its subproblems. Required for DP and greedy algorithms.

## 📋 Concrete Example

Shortest path A to C through B: the shortest A-to-C path must use the shortest A-to-B and B-to-C paths. If a shorter A-to-B existed, the overall path would not be optimal.

## 🔗 Analogy

The fastest route from home to school via the bus stop must use the fastest home-to-bus-stop route and the fastest bus-stop-to-school route. If either sub-route could be faster, the whole route is not optimal.

## Related Concepts

- [[dynamic-programming|Dynamic Programming]]
- [[greedy-algorithm|Greedy Algorithm]]
- [[subproblem|Subproblem]]
- [[bellman-equation|Bellman Equation]]

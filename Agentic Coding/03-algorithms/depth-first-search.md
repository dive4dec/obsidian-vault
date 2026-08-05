---
tags: [Algorithms]
domain: Algorithms
---

# Depth-First Search

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Explore as deep as possible along each branch before backtracking. Uses a stack (or recursion). Good for mazes, tree traversal, and connectivity.

## 📋 Concrete Example

DFS on a graph: start at A, go to B, go to D (deepest from A), backtrack to B, go to E, backtrack to A, go to C. Visits: A, B, D, E, C.

## 🔗 Analogy

Exploring a maze by following one path as far as possible until you hit a dead end, then backtracking to the last junction and trying another path.

## Related Concepts

- [[searching|Searching]]
- [[breadth-first-search|Breadth-First Search]]
- [[stack|Stack]]
- [[recursion|Recursion]]
- [[backtracking|Backtracking]]

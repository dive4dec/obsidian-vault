---
tags: [Algorithms]
domain: Algorithms
---

# Backtracking

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Build a solution incrementally and abandon (backtrack) any path that cannot lead to a valid solution. Used for puzzles, N-Queens, Sudoku.

## 📋 Concrete Example

Solving a maze: go down a path, if you hit a dead end, backtrack to the last junction and try another direction. You do not explore dead ends fully.

## 🔗 Analogy

Trying to fit Tetris pieces. You place a piece, and if it leads to an impossible situation later, you remove it and try a different piece. You backtrack from dead ends.

## Related Concepts

- [[dfs|DFS]]
- [[recursion|Recursion]]
- [[n-queens|N-Queens]]
- [[constraint-satisfaction|Constraint Satisfaction]]

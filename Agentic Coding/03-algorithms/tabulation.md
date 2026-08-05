---
tags: [Algorithms]
domain: Algorithms
---

# Tabulation

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A bottom-up DP technique: build a table of solutions from the smallest subproblems up to the full problem, iteratively.

## 📋 Concrete Example

Fibonacci tabulation: `table = [0, 1]; for i in range(2, n+1): table.append(table[i-1] + table[i-2])`. Fill the table from small to large, no recursion.

## 🔗 Analogy

Building a multiplication table. You fill in 1x1, 1x2, 1x3... then 2x1, 2x2... Each entry is built from the ones before it. You work bottom-up.

## Related Concepts

- [[dynamic-programming|Dynamic Programming]]
- [[bottom-up|Bottom-Up]]
- [[memoization|Memoization]]
- [[iteration|Iteration]]

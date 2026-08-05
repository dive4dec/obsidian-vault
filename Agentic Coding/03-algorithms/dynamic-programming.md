---
tags: [Algorithms]
domain: Algorithms
---

# Dynamic Programming

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

When a problem has overlapping subproblems, DP solves each subproblem once and stores the result, avoiding repeated work.

## 📋 Concrete Example

Fibonacci: naive recursion computes fib(3) many times. DP stores fib(3) once and reuses it. fib(100) goes from impossibly slow to instant.

## 🔗 Analogy

A student who solved a past paper question once and kept the answer. When the same type of question appears again, they reuse the saved answer instead of solving from scratch.

## Related Concepts

- [[memoization|Memoization]]
- [[tabulation|Tabulation]]
- [[optimal-substructure|Optimal Substructure]]
- [[overlapping-subproblems|Overlapping Subproblems]]

---
tags: [Algorithms]
domain: Algorithms
---

# Overlapping Subproblems

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

When the same subproblem is solved multiple times during recursion. DP caches these to avoid redundant work.

## 📋 Concrete Example

Naive Fibonacci: fib(4) calls fib(3) and fib(2). fib(3) calls fib(2) and fib(1). fib(2) is computed twice. With many calls, the overlap explodes.

## 🔗 Analogy

Two group members independently solve the same sub-problem without knowing the other already solved it. DP is like a shared document -- once one person solves it, everyone reuses the answer.

## Related Concepts

- [[dynamic-programming|Dynamic Programming]]
- [[memoization|Memoization]]
- [[repeated-computation|Repeated Computation]]
- [[subproblem|Subproblem]]

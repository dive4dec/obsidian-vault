---
tags: [Algorithms]
domain: Algorithms
---

# Top-Down DP

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Solving from the top (full problem) by recursively breaking it down and caching results. Natural to write but uses stack space.

## 📋 Concrete Example

Fibonacci top-down: `fib(n)` calls `fib(n-1)` and `fib(n-2)`, caching each. You start from the big problem and work down to base cases.

## 🔗 Analogy

A manager who delegates tasks downward. They start with the big project, break it into sub-tasks, and assign each. If a sub-task was already done, they reuse the result.

## Related Concepts

- [[dynamic-programming|Dynamic Programming]]
- [[memoization|Memoization]]
- [[recursion|Recursion]]
- [[bottom-up-dp|Bottom-Up DP]]

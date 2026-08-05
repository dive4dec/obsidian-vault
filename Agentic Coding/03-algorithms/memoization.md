---
tags: [Algorithms]
domain: Algorithms
---

# Memoization

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A top-down DP technique: store results of expensive function calls and return the cached result when the same inputs occur again.

## 📋 Concrete Example

Fibonacci with memo: `cache = {}; def fib(n): if n in cache: return cache[n]; ... cache[n] = result; return result`. First call computes, later calls are instant.

## 🔗 Analogy

A student who writes down the answer to a maths problem in a notebook. When asked the same problem again, they just look it up instead of recalculating.

## Related Concepts

- [[dynamic-programming|Dynamic Programming]]
- [[top-down|Top-Down]]
- [[cache|Cache]]
- [[tabulation|Tabulation]]

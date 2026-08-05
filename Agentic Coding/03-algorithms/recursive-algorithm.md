---
tags: [Algorithms]
domain: Algorithms
---

# Recursive Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

An algorithm that solves a problem by calling itself on a smaller version of the same problem. Elegant for self-similar structures like trees.

## 📋 Concrete Example

`def factorial(n): if n <= 1: return 1; return n * factorial(n-1)`. factorial(4) = 4 * 3 * 2 * 1 = 24. Each call works on a smaller n.

## 🔗 Analogy

Russian nesting dolls. To count all dolls, you open the outer one, count it as 1, then count the inner dolls the same way. You stop when there are no more dolls inside.

## Related Concepts

- [[recursion|Recursion]]
- [[base-case|Base Case]]
- [[call-stack|Call Stack]]
- [[divide-and-conquer|Divide and Conquer]]

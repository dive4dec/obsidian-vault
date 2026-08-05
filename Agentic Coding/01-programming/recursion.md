---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Recursion

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Some problems are naturally self-similar - a smaller version of the same problem. Recursion solves these elegantly.

## 📋 Concrete Example

`def factorial(n): if n <= 1: return 1; return n * factorial(n-1)` - factorial(4) = 4 * 3 * 2 * 1 = 24.

## 🔗 Analogy

Russian nesting dolls - to open the biggest doll, you open it and find a smaller one inside. You keep opening until you reach the tiniest doll (base case).

## Related Concepts

- [[base-case|Base Case]]
- [[call-stack|Call Stack]]
- [[stack-overflow|Stack Overflow]]

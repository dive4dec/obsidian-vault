---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Base Case

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Recursion needs a stopping point - without it, the function calls itself forever. The base case is that stop.

## 📋 Concrete Example

In `factorial(n)`, the base case is `if n <= 1: return 1`. Without this, factorial(0) calls factorial(-1) calls factorial(-2)... forever.

## 🔗 Analogy

The smallest nesting doll that doesn't open - it's solid inside. When you reach it, you stop opening. That's the base case.

## Related Concepts

- [[recursion|Recursion]]
- [[call-stack|Call Stack]]
- [[infinite-recursion|Infinite Recursion]]

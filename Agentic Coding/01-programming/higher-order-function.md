---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Higher-Order Function

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Functions that take other functions as arguments (or return them) let you write very flexible, reusable code.

## 📋 Concrete Example

`map(str.upper, ['a','b'])` applies `str.upper` to each element. `filter(lambda x: x > 0, [-1, 0, 1])` keeps only positives.

## 🔗 Analogy

A manager who assigns tasks to workers - the manager (higher-order function) doesn't do the work; it decides which worker (function) does what.

## Related Concepts

- [[lambda|Lambda]]
- [[map|Map]]
- [[filter|Filter]]
- [[reduce|Reduce]]

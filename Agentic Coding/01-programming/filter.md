---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Filter

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Selecting only items that meet a condition from a collection is what `filter` does.

## 📋 Concrete Example

`list(filter(lambda x: x % 2 == 0, [1,2,3,4,5,6]))` gives [2, 4, 6]. Only even numbers pass through.

## 🔗 Analogy

A sieve in the kitchen - you pour mixed ingredients through it. Only items smaller than the holes (passing the condition) get through.

## Related Concepts

- [[higher-order-function|Higher-Order Function]]
- [[lambda|Lambda]]
- [[predicate|Predicate]]

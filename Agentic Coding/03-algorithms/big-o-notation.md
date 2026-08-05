---
tags: [Algorithms]
domain: Algorithms
---

# Big-O Notation

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

To compare algorithms, you need a way to describe how their speed changes as input grows. Big-O describes the growth rate, ignoring constants.

## 📋 Concrete Example

O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n^2) quadratic, O(2^n) exponential. A sorting algorithm that is O(n^2) gets 100x slower when input goes from 10 to 100.

## 🔗 Analogy

Describing how long homework takes based on number of questions. 'It scales linearly' (O(n)) means 10 questions take twice as long as 5. 'It scales quadratically' (O(n^2)) means 10 questions take 4x as long as 5.

## Related Concepts

- [[time-complexity|Time Complexity]]
- [[space-complexity|Space Complexity]]
- [[asymptotic-analysis|Asymptotic Analysis]]
- [[omega-notation|Omega Notation]]

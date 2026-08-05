---
tags: [Algorithms]
domain: Algorithms
---

# Meet in the Middle

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Split a problem in half, solve each half, then combine. For some problems (like subset sum), this is faster than brute force.

## 📋 Concrete Example

Subset sum for 40 elements: brute force is 2^40 (too slow). Split into two halves of 20, enumerate 2^20 sums each, then match. Total: 2 * 2^20, much faster.

## 🔗 Analogy

Two search parties starting from opposite ends of a trail, walking toward each other. They meet in the middle, covering the trail in half the time a single party would need.

## Related Concepts

- [[divide-and-conquer|Divide and Conquer]]
- [[subset-sum|Subset Sum]]
- [[exponential-reduction|Exponential Reduction]]
- [[two-phase-search|Two-Phase Search]]

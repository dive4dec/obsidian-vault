---
tags: [Algorithms]
domain: Algorithms
---

# Prefix Sum

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Precompute cumulative sums so any range sum can be answered in O(1). Build once, query many times.

## 📋 Concrete Example

Array [1, 3, 5, 2, 4]. Prefix sums: [1, 4, 9, 11, 15]. Sum from index 1 to 3 = prefix[3] - prefix[0] = 9 - 1 = 8 (which is 3+5+2).

## 🔗 Analogy

A running total in a shop. You keep a cumulative spending list. To find how much you spent from day 3 to day 7, subtract the total up to day 2 from the total up to day 7.

## Related Concepts

- [[range-query|Range Query]]
- [[precomputation|Precomputation]]
- [[cumulative-sum|Cumulative Sum]]
- [[o1-query|O(1) Query]]

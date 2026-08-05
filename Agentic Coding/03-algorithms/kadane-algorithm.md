---
tags: [Algorithms]
domain: Algorithms
---

# Kadane Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

An O(n) algorithm for the maximum subarray problem. At each position, decide whether to extend the current subarray or start fresh.

## 📋 Concrete Example

At each element, the best subarray ending here is either `element alone` or `element + best ending at previous`. Track the global maximum. One pass, done.

## 🔗 Analogy

A runner tracking their best lap streak. At each lap, they decide: continue the current streak, or start a new one? They keep the best streak ever seen.

## Related Concepts

- [[maximum-subarray|Maximum Subarray]]
- [[dynamic-programming|Dynamic Programming]]
- [[linear-time|Linear Time]]
- [[online-algorithm|Online Algorithm]]

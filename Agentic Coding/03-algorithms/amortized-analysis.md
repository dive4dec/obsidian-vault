---
tags: [Algorithms]
domain: Algorithms
---

# Amortized Analysis

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Some operations are occasionally expensive but cheap on average. Amortized analysis shows the average cost per operation over a sequence.

## 📋 Concrete Example

Dynamic array append is usually O(1), but when it resizes, it is O(n). Over n appends, total work is O(n), so amortized cost per append is O(1).

## 🔗 Analogy

A bus that usually boards 1 passenger (O(1)) but occasionally needs to add a new carriage (O(n) for one trip). Over many trips, the average cost per passenger is still O(1).

## Related Concepts

- [[dynamic-array|Dynamic Array]]
- [[time-complexity|Time Complexity]]
- [[average-cost|Average Cost]]
- [[aggregate-analysis|Aggregate Analysis]]

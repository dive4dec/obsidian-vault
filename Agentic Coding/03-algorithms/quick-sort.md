---
tags: [Algorithms]
domain: Algorithms
---

# Quick Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Pick a pivot, partition into elements smaller and larger than the pivot, then recursively sort each partition. Fast in practice, O(n log n) average.

## 📋 Concrete Example

Sort [5, 3, 8, 1, 4] with pivot 5: partition into [3, 1, 4] and [8], pivot in middle. Recursively sort [3, 1, 4] -> [1, 3, 4]. Result: [1, 3, 4, 5, 8].

## 🔗 Analogy

Splitting a class into two groups: shorter than the teacher and taller than the teacher. Then each group splits again by a new 'pivot student'. Eventually everyone is in order.

## Related Concepts

- [[sorting|Sorting]]
- [[divide-and-conquer|Divide and Conquer]]
- [[pivot|Pivot]]
- [[partition|Partition]]
- [[in-place-sort|In-Place Sort]]

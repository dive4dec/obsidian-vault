---
tags: [Algorithms]
domain: Algorithms
---

# Merge Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Divide the array in half, sort each half, then merge the sorted halves. Reliable O(n log n) but uses extra memory.

## 📋 Concrete Example

Sort [5, 3, 8, 1]: split into [5,3] and [8,1]. Sort each -> [3,5] and [1,8]. Merge: compare 3 vs 1 -> [1], 3 vs 8 -> [1,3], 5 vs 8 -> [1,3,5,8].

## 🔗 Analogy

Two prefects each sorted half the class list. Now they merge by comparing the top of each pile and taking the smaller name, building one sorted list.

## Related Concepts

- [[sorting|Sorting]]
- [[divide-and-conquer|Divide and Conquer]]
- [[merge-operation|Merge Operation]]
- [[stable-sort|Stable Sort]]

---
tags: [Algorithms]
domain: Algorithms
---

# Heap Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Build a max-heap from the data, then repeatedly extract the maximum (root) and rebuild the heap. O(n log n), in-place, but not stable.

## 📋 Concrete Example

Build heap from [3, 1, 4, 1, 5] -> [5, 3, 4, 1, 1]. Swap root (5) with last, reduce heap, sift down. Repeat. Sorted: [1, 1, 3, 4, 5].

## 🔗 Analogy

A tournament bracket. The champion (max) is determined, then removed. The remaining players compete again for the next champion. Repeat until all ranks are decided.

## Related Concepts

- [[sorting|Sorting]]
- [[heap|Heap]]
- [[binary-heap|Binary Heap]]
- [[in-place-sort|In-Place Sort]]

---
tags: [Algorithms]
domain: Algorithms
---

# Tim Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A hybrid of merge sort and insertion sort used by Python and Java. It detects already-sorted runs and merges them, making it extremely fast on real-world data.

## 📋 Concrete Example

Python's `sorted()` uses Tim Sort. On data with existing order (like partially sorted lists), it runs in O(n) instead of O(n log n). It finds natural runs and merges them.

## 🔗 Analogy

A professional organiser tidying a messy room. They notice some shelves are already sorted (natural runs), leave those alone, and only merge and fix the disorganised parts. Much faster than sorting everything from scratch.

## Related Concepts

- [[merge-sort|Merge Sort]]
- [[insertion-sort|Insertion Sort]]
- [[hybrid-algorithm|Hybrid Algorithm]]
- [[stable-sort|Stable Sort]]
- [[natural-run|Natural Run]]

---
tags: [Algorithms]
domain: Algorithms
---

# Bucket Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Distribute elements into buckets by value range, sort each bucket, then concatenate. Good for uniformly distributed data.

## 📋 Concrete Example

Sort GPAs [3.2, 2.8, 3.9, 1.5, 2.1]: bucket 1.0-2.0 gets [1.5], bucket 2.0-3.0 gets [2.8, 2.1], bucket 3.0-4.0 gets [3.2, 3.9]. Sort each bucket, concatenate.

## 🔗 Analogy

Sorting exam scores into grade buckets: A (90-100), B (80-89), C (70-79). Put each paper in its grade pile, sort within each pile, then stack the piles in order.

## Related Concepts

- [[sorting|Sorting]]
- [[counting-sort|Counting Sort]]
- [[uniform-distribution|Uniform Distribution]]
- [[scatter-gather|Scatter-Gather]]

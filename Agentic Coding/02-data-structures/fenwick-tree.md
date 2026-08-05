---
tags: [Data-Structures]
domain: Data Structures
---

# Fenwick Tree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

Also called a Binary Indexed Tree. A compact array-based structure for prefix sums and point updates, using less memory than a segment tree.

## 📋 Concrete Example

Array [3, 1, 4, 1, 5]. `prefix_sum(3)` = 3+1+4 = 8 in O(log n). Updating index 2 also takes O(log n). Implemented with bit tricks.

## 🔗 Analogy

A running total column in a spreadsheet. Instead of re-adding all rows, you keep partial sums at power-of-two intervals and combine them cleverly.

## Related Concepts

- [[segment-tree|Segment Tree]]
- [[prefix-sum|Prefix Sum]]
- [[range-query|Range Query]]
- [[binary-indexed-tree|Binary Indexed Tree]]

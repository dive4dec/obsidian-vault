---
tags: [Data-Structures]
domain: Data Structures
---

# Segment Tree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need to answer range queries (sum, min, max over a range) and update values efficiently, a segment tree splits the range hierarchically.

## 📋 Concrete Example

Array [3, 1, 4, 1, 5]. Query 'sum from index 1 to 3' = 1+4+1 = 6. The segment tree answers in O(log n) instead of scanning O(n).

## 🔗 Analogy

A canteen menu divided by sections: drinks, mains, desserts. Each section shows its total price. Finding the total for a section is instant; you do not add up item by item.

## Related Concepts

- [[range-query|Range Query]]
- [[binary-tree|Binary Tree]]
- [[lazy-propagation|Lazy Propagation]]
- [[fenwick-tree|Fenwick Tree]]

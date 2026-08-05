---
tags: [Data-Structures]
domain: Data Structures
---

# Union-Find

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

The two core operations of a disjoint set: union (merge two groups) and find (identify which group an element belongs to).

## 📋 Concrete Example

`union(A, B)` puts A and B in the same group. `find(A)` returns the group identifier. With path compression, `find` is nearly O(1).

## 🔗 Analogy

Merging two companies. After the merger, employees from both companies share the same employer ID. Checking if two people work for the same company is instant.

## Related Concepts

- [[disjoint-set|Disjoint Set]]
- [[union-by-rank|Union by Rank]]
- [[path-compression|Path Compression]]
- [[connected-components|Connected Components]]

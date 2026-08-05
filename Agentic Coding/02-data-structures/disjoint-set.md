---
tags: [Data-Structures]
domain: Data Structures
---

# Disjoint Set

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need to track which elements belong to the same group -- connected components, network connectivity, Kruskal algorithm -- disjoint sets manage merging efficiently.

## 📋 Concrete Example

Friends: Alice-Bob, Bob-Carol. After union operations, Alice, Bob, and Carol are in the same group. Asking `find(Alice) == find(Carol)` returns True.

## 🔗 Analogy

A school club fair. Students start alone. As they join clubs, they merge into groups. You can instantly check if two students are in the same club.

## Related Concepts

- [[union-find|Union-Find]]
- [[find-operation|Find Operation]]
- [[union-operation|Union Operation]]
- [[path-compression|Path Compression]]
- [[kruskal-algorithm|Kruskal Algorithm]]

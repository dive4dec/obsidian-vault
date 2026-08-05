---
tags: [Data-Structures]
domain: Data Structures
---

# Adjacency List

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

For sparse graphs (few edges relative to nodes), an adjacency list stores each node's neighbours separately, saving memory.

## 📋 Concrete Example

`graph = {'A': ['B', 'C'], 'B': ['A', 'D'], 'C': ['A'], 'D': ['B']}`. Each key lists only its direct neighbours.

## 🔗 Analogy

A contacts list on your phone. Each person's name has a list of their direct friends. You do not store every possible friendship, only the ones that exist.

## Related Concepts

- [[graph|Graph]]
- [[adjacency-matrix|Adjacency Matrix]]
- [[sparse-graph|Sparse Graph]]
- [[space-complexity|Space Complexity]]

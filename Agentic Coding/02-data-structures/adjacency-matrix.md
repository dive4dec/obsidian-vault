---
tags: [Data-Structures]
domain: Data Structures
---

# Adjacency Matrix

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

For dense graphs (many edges) or when you need to check edge existence instantly, a matrix stores all possible connections as a table.

## 📋 Concrete Example

A 4x4 grid where `matrix[i][j] = 1` means node i connects to node j, `0` means no connection. Checking `matrix[2][3]` is O(1).

## 🔗 Analogy

A seating chart for a classroom showing who sits next to whom. Every possible pair has a yes or no in a grid. Quick to look up but wastes space if few students sit together.

## Related Concepts

- [[graph|Graph]]
- [[adjacency-list|Adjacency List]]
- [[dense-graph|Dense Graph]]
- [[matrix|Matrix]]

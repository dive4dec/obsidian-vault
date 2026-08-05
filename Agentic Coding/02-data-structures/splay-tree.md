---
tags: [Data-Structures]
domain: Data Structures
---

# Splay Tree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A self-balancing tree that moves recently accessed nodes to the root, exploiting the fact that accesses are often repetitive (temporal locality).

## 📋 Concrete Example

After searching for node X, the tree rotates X to the root. If you search for X again soon, it is right at the top -- instant access.

## 🔗 Analogy

A bookshelf where the book you just read goes to the front. If you tend to re-read recent books, they are always within arm's reach.

## Related Concepts

- [[self-balancing-tree|Self-Balancing Tree]]
- [[binary-search-tree|Binary Search Tree]]
- [[temporal-locality|Temporal Locality]]
- [[tree-rotation|Tree Rotation]]

---
tags: [Data-Structures]
domain: Data Structures
---

# Post-Order Traversal

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

Visit left subtree, then right subtree, then root last. Useful for deleting trees or calculating folder sizes.

## 📋 Concrete Example

For tree A(B(D,E), C): post-order gives D, E, B, C, A. The root is visited last in each subtree.

## 🔗 Analogy

Calculating the total size of a folder: you must add up all subfolder sizes first (children), then add the folder's own size (root) last.

## Related Concepts

- [[tree-traversal|Tree Traversal]]
- [[pre-order-traversal|Pre-Order Traversal]]
- [[in-order-traversal|In-Order Traversal]]
- [[bottom-up-processing|Bottom-Up Processing]]

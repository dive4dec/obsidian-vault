---
tags: [Data-Structures]
domain: Data Structures
---

# Self-Balancing Tree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A tree that automatically adjusts its shape after insertions and deletions to stay balanced, ensuring operations remain fast regardless of insertion order.

## 📋 Concrete Example

AVL and Red-Black trees are self-balancing. After each insert or delete, they perform rotations to keep height near O(log n). Without this, a BST fed sorted data degenerates into a slow linked list.

## 🔗 Analogy

A tightrope walker who constantly shifts their weight to stay balanced. Every time the wind pushes them (insert/delete), they adjust (rotate) to avoid tipping over.

## Related Concepts

- [[avl-tree|AVL Tree]]
- [[red-black-tree|Red-Black Tree]]
- [[tree-rotation|Tree Rotation]]
- [[binary-search-tree|Binary Search Tree]]
- [[tree-height|Tree Height]]

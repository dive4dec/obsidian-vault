---
tags: [Data-Structures]
domain: Data Structures
---

# B-Tree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When data is too large for memory and lives on disk -- databases, file systems -- B-trees minimise disk reads by storing many keys per node.

## 📋 Concrete Example

A B-tree node might hold 100 keys and 101 child pointers. This means fewer levels, fewer disk reads. Database indexes use B-trees extensively.

## 🔗 Analogy

A library where each shelf holds 100 books (not just 1). You find the right shelf in 2-3 steps instead of 10, saving time walking through the stacks.

## Related Concepts

- [[self-balancing-tree|Self-Balancing Tree]]
- [[database-index|Database Index]]
- [[disk-i-o|Disk I-O]]
- [[external-sorting|External Sorting]]

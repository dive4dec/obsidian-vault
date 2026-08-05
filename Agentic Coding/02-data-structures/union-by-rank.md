---
tags: [Data-Structures]
domain: Data Structures
---

# Union by Rank

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

An optimisation for union-find that always attaches the shorter tree under the root of the taller tree, keeping the overall tree shallow.

## 📋 Concrete Example

When unioning groups A (height 3) and B (height 2), attach B's root under A's root. The height stays 3 instead of becoming 4.

## 🔗 Analogy

When merging two companies, the smaller company's CEO reports to the larger company's CEO. This keeps the management chain short.

## Related Concepts

- [[union-find|Union-Find]]
- [[path-compression|Path Compression]]
- [[tree-height|Tree Height]]
- [[disjoint-set|Disjoint Set]]

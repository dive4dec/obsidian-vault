---
tags: [Data-Structures]
domain: Data Structures
---

# Path Compression

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

An optimisation for union-find that flattens the tree during find operations, making future queries nearly instant.

## 📋 Concrete Example

When `find(D)` traverses D -> C -> B -> A (root), path compression re-points D and C directly to A. Next time, `find(D)` goes straight to A in one step.

## 🔗 Analogy

Instead of asking your manager, who asks their manager, who asks the CEO, the company restructures so everyone reports directly to the CEO. Future queries are one step.

## Related Concepts

- [[union-find|Union-Find]]
- [[find-operation|Find Operation]]
- [[flattening|Flattening]]
- [[amortized-cost|Amortized Cost]]

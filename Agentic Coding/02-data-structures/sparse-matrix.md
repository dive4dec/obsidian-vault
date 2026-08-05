---
tags: [Data-Structures]
domain: Data Structures
---

# Sparse Matrix

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When a matrix is mostly zeros -- like a social graph of 7 billion people where each knows only 100 -- storing every cell wastes memory. Sparse formats store only non-zero entries.

## 📋 Concrete Example

A 1000x1000 matrix with only 50 non-zero values. Instead of 1,000,000 cells, store 50 (row, col, value) triples. Huge memory savings.

## 🔗 Analogy

A mostly empty attendance sheet for a huge lecture hall. Instead of marking `absent` for all 500 empty seats, you only write down the 5 students who showed up.

## Related Concepts

- [[matrix|Matrix]]
- [[compressed-storage|Compressed Storage]]
- [[csr-format|CSR Format]]
- [[memory-efficiency|Memory Efficiency]]

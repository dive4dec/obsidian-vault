---
tags: [Data-Structures]
domain: Data Structures
---

# Hash Table

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

The underlying implementation of a hash map. It uses a hash function to convert keys into array indices for direct storage.

## 📋 Concrete Example

Key `Alice` hashes to index 3, key `Bob` hashes to index 7. Values are stored at those array positions. Lookup is just: hash the key, go to that index.

## 🔗 Analogy

A library where the librarian computes a shelf number from the book title using a formula. You do not search aisle by aisle; the formula sends you straight to the right shelf.

## Related Concepts

- [[hash-map|Hash Map]]
- [[hash-function|Hash Function]]
- [[collision-resolution|Collision Resolution]]
- [[bucket|Bucket]]

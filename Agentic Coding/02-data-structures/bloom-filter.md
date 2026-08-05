---
tags: [Data-Structures]
domain: Data Structures
---

# Bloom Filter

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need to quickly check if an item might be in a huge set without storing the full set, a bloom filter gives a fast `possibly` or 'definitely not'.

## 📋 Concrete Example

A bloom filter for a million URLs uses a few hundred KB. `might_contain(url)` returns True (maybe) or False (definitely not). No false negatives, some false positives.

## 🔗 Analogy

A bouncer with a blurry photo list. If someone is not on the list, they are definitely not VIP. If they seem to match, they might be VIP (worth a closer check).

## Related Concepts

- [[hash-function|Hash Function]]
- [[false-positive|False Positive]]
- [[probabilistic-structure|Probabilistic Structure]]
- [[bit-array|Bit Array]]

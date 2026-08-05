---
tags: [Data-Structures]
domain: Data Structures
---

# Set

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need to track unique items and check membership instantly -- deduplication, tags, visited nodes -- a set is the right structure.

## 📋 Concrete Example

`visited = set(); visited.add('nodeA'); 'nodeA' in visited` returns True. Adding `nodeA` again does nothing -- duplicates are ignored.

## 🔗 Analogy

A stamp collection. You only keep one of each stamp design. If someone gives you a duplicate, it bounces out. Checking if you have a stamp is a quick glance.

## Related Concepts

- [[hash-set|Hash Set]]
- [[membership-test|Membership Test]]
- [[union|Union]]
- [[intersection|Intersection]]
- [[difference|Difference]]

---
tags: [Algorithms]
domain: Algorithms
---

# String Matching

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Finding a pattern string within a larger text. Naive approach is O(nm); smarter algorithms like KMP achieve O(n + m).

## 📋 Concrete Example

Find `cat` in `concatenate`: check positions 0 (no), 1 (no), 2 (no), 3 (yes! `cat` at index 3). Naive: check each starting position.

## 🔗 Analogy

Searching for a phrase in a book. The naive way: check every page position. Smart algorithms (KMP) skip ahead based on what they already know about the pattern.

## Related Concepts

- [[kmp-algorithm|KMP Algorithm]]
- [[rabin-karp-algorithm|Rabin-Karp Algorithm]]
- [[boyer-moore-algorithm|Boyer-Moore Algorithm]]
- [[substring-search|Substring Search]]

---
tags: [Algorithms]
domain: Algorithms
---

# KMP Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Knuth-Morris-Pratt string matching skips ahead using a failure function, avoiding re-checking characters already matched. O(n + m).

## 📋 Concrete Example

When matching `ABAB` in `ABABABC` and failing at position 4, KMP knows the first 3 chars matched, so it jumps ahead instead of restarting from scratch.

## 🔗 Analogy

Searching for `ABABD` and you already matched `ABAB` before failing. Instead of restarting, you know `AB` at the end could start a new match, so you shift by 2, not by 1.

## Related Concepts

- [[string-matching|String Matching]]
- [[failure-function|Failure Function]]
- [[prefix-table|Prefix Table]]
- [[linear-time-matching|Linear Time Matching]]

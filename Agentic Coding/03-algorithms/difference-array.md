---
tags: [Algorithms]
domain: Algorithms
---

# Difference Array

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

The inverse of prefix sum: record the differences between consecutive elements. Enables O(1) range updates.

## 📋 Concrete Example

To add 5 to every element from index 2 to 4: diff[2] += 5, diff[5] -= 5. Then prefix-sum the diff array to get the updated array. One range update in O(1).

## 🔗 Analogy

A train schedule where you record only the changes at each station (who got on/off), not the full passenger count at every stop. Reconstruct the full count by accumulating changes.

## Related Concepts

- [[prefix-sum|Prefix Sum]]
- [[range-update|Range Update]]
- [[array-technique|Array Technique]]
- [[o1-update|O(1) Update]]

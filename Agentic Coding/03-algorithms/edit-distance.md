---
tags: [Algorithms]
domain: Algorithms
---

# Edit Distance

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

The minimum number of insertions, deletions, and substitutions to transform one string into another. Classic DP problem.

## 📋 Concrete Example

Transform `kitten` to `sitting`: substitute k->s, e->i, insert g. Edit distance = 3. Used in spell checkers and DNA alignment.

## 🔗 Analogy

Autocorrect: `teh` to `the` is 1 edit (swap). `recieve` to `receive` is 2 edits. The phone suggests the word with the smallest edit distance.

## Related Concepts

- [[dynamic-programming|Dynamic Programming]]
- [[levenshtein-distance|Levenshtein Distance]]
- [[string-comparison|String Comparison]]
- [[spell-checker|Spell Checker]]

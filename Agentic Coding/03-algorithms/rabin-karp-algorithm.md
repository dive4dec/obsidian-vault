---
tags: [Algorithms]
domain: Algorithms
---

# Rabin-Karp Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Uses rolling hashes to compare the pattern against text. When hashes match, verify with actual characters. Good for multiple pattern search.

## 📋 Concrete Example

Hash `cat` to 312. Slide a rolling hash over the text. When the hash matches 312, verify the actual characters. The rolling hash updates in O(1) per position.

## 🔗 Analogy

A quick fingerprint check. You compute a fingerprint of your pattern and slide it over the text. Only when fingerprints match do you do a careful comparison.

## Related Concepts

- [[string-matching|String Matching]]
- [[rolling-hash|Rolling Hash]]
- [[hash-function|Hash Function]]
- [[multiple-pattern-search|Multiple Pattern Search]]

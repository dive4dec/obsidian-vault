---
tags: [Algorithms]
domain: Algorithms
---

# Boyer-Moore Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Scans the pattern right-to-left and uses bad-character and good-suffix heuristics to skip large sections of text. Often sublinear in practice.

## 📋 Concrete Example

Searching `EXAMPLE` in text: compare from the rightmost character. If it mismatches with a character not in the pattern, skip the entire pattern length.

## 🔗 Analogy

Searching for a long word in a book by checking the last letter first. If the last letter does not match and is not in the word at all, skip ahead by the full word length.

## Related Concepts

- [[string-matching|String Matching]]
- [[bad-character-heuristic|Bad Character Heuristic]]
- [[good-suffix-heuristic|Good Suffix Heuristic]]
- [[right-to-left-scan|Right-to-Left Scan]]

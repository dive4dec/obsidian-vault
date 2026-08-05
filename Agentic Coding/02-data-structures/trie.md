---
tags: [Data-Structures]
domain: Data Structures
---

# Trie

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need to store and search strings by prefix -- autocomplete, spell check, IP routing -- a trie organises characters level by level.

## 📋 Concrete Example

Trie for `cat` and `car`: root -> c -> a -> t (end) and c -> a -> r (end). Sharing the `ca` prefix saves space and enables prefix search.

## 🔗 Analogy

A library catalogue organised letter by letter. All books starting with `C` are in one section, `CA` in a subsection, `CAT` in a sub-subsection. Finding all books starting with `CA` is instant.

## Related Concepts

- [[prefix-tree|Prefix Tree]]
- [[autocomplete|Autocomplete]]
- [[string-matching|String Matching]]
- [[radix-tree|Radix Tree]]

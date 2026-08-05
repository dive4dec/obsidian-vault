---
tags: [Data-Structures]
domain: Data Structures
---

# Persistent Data Structure

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A structure that preserves old versions after updates. Common in functional programming, version control, and undo features.

## 📋 Concrete Example

Updating a persistent list creates a new version that shares unchanged parts with the old version. Both old and new coexist. Like Git branches sharing common history.

## 🔗 Analogy

A sketchbook where each page builds on the previous. You never erase; each new page is a new version. Old pages (versions) are preserved and share most of the drawing.

## Related Concepts

- [[immutable-data-structure|Immutable Data Structure]]
- [[structural-sharing|Structural Sharing]]
- [[functional-programming|Functional Programming]]
- [[version-control|Version Control]]

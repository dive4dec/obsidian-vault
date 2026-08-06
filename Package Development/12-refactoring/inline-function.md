---
tags: [Refactoring]
domain: Refactoring
---

# Inline Function

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Sometimes a function's body is as clear as its name, making the indirection pointless. Inlining removes unnecessary wrappers, reducing cognitive overhead and making code simpler.

## 📋 Concrete Example

A one-line `def get_rating(self): return self._rating` adds no value. Replace calls `movie.get_rating()` with `movie._rating` directly, or better, a public `rating` property.

## 🔗 Analogy

If a receptionist just shouts your question into the next room without adding anything, you might as well ask the person directly. The middle step adds delay without value.

## Related Concepts

- [[extract-function|Extract Function]]
- [[kiss|KISS]]
- [[rename-method|Rename Method]]

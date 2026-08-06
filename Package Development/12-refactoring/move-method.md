---
tags: [Refactoring]
domain: Refactoring
---

# Move Method

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Methods sometimes end up in the wrong class, using another class's data more than their own. Moving a method to where its data lives improves cohesion and reduces coupling.

## 📋 Concrete Example

A `Customer` class has a `calculate_shipping()` that mostly uses `Order` data. Move `calculate_shipping()` to `Order`, so it sits next to the data it actually needs.

## 🔗 Analogy

If the school librarian keeps the sports equipment in the library, athletes must walk across campus. Moving it to the gym puts equipment where it is used — faster for everyone.

## Related Concepts

- [[extract-class|Extract Class]]
- [[move-field|Move Field]]
- [[coupling-cohesion|Coupling and Cohesion]]

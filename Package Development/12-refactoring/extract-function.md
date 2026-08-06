---
tags: [Refactoring]
domain: Refactoring
---

# Extract Function

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Long methods are hard to read and test. Extracting a chunk into a named function makes intent clear and lets you reuse the logic, reducing duplication and bugs.

## 📋 Concrete Example

A 40-line `process_order` function that calculates tax, applies discounts, and logs the result can be split into `calculate_tax()`, `apply_discount()`, and `log_order()`. Each name explains its purpose.

## 🔗 Analogy

Instead of one long paragraph describing your whole day, break it into sentences: "I woke up. I ate breakfast. I went to school." Each sentence is clearer on its own.

## Related Concepts

- [[extract-class|Extract Class]]
- [[inline-function|Inline Function]]
- [[single-responsibility|Single Responsibility]]

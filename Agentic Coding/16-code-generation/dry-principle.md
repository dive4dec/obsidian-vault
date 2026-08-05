---
tags: [Code-Generation]
domain: Code Generation
---

# DRY Principle

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

Do not Repeat Yourself. Duplicate code is harder to maintain. The model can identify and eliminate duplication.

## 📋 Concrete Example

Before: same 10-line validation code in 5 places. After: one validate() function called in 5 places. Change the validation? Update one function, not five.

## 🔗 Analogy

A school rule: 'Use the same homework template for all classes.' Instead of each teacher making their own, one template is reused. DRY eliminates duplication.

## Related Concepts

- [[reusable-code|Reusable Code]]
- [[refactoring|Refactoring]]
- [[code-quality|Code Quality]]

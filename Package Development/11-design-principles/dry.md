---
tags: [Design-Principles]
domain: Design Principles
---

# DRY

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

"Don't Repeat Yourself" means every piece of knowledge has one, authoritative representation. Duplicated code leads to bugs when you fix one copy but forget the others.

## 📋 Concrete Example

If three functions compute tax the same way, extract a `calculate_tax(amount, rate)` helper. Change the formula once, and all callers stay in sync automatically.

## 🔗 Analogy

Like writing a phone number in one contact entry instead of on five sticky notes. If the number changes, you update one place, not hunt down every note.

## Related Concepts

- [[single-responsibility|Single Responsibility]]
- [[abstraction|Abstraction]]
- [[technical-debt|Technical Debt]]

---
tags: [Refactoring]
domain: Refactoring
---

# Refactoring MOC

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Refactoring improves code structure without changing behavior, keeping software maintainable as it grows. Mastering it lets you reduce technical debt continuously instead of letting it compound.

## 📋 Concrete Example

Before adding a feature to a messy function, run `pytest`, apply `Extract Function`, run `pytest` again. Tests stay green, code is cleaner, and the new feature is easier to add.

## 🔗 Analogy

Tidying a room is not remodeling it — you keep the same furniture but arrange it better. Regular tidying keeps the space livable; skipping it leads to clutter no one can navigate.

## Core Techniques

- [[extract-function|Extract Function]]
- [[extract-class|Extract Class]]
- [[inline-function|Inline Function]]
- [[rename-method|Rename Method]]
- [[move-method|Move Method]]
- [[replace-conditional-with-polymorphism|Replace Conditional with Polymorphism]]
- [[introduce-parameter-object|Introduce Parameter Object]]
- [[replace-method-with-method-object|Replace Method with Method Object]]
- [[extract-interface|Extract Interface]]
- [[replace-inheritance-with-delegation|Replace Inheritance with Delegation]]

## Quality and Legacy

- [[code-smell|Code Smell]]
- [[technical-debt|Technical Debt]]
- [[boy-scout-rule|Boy Scout Rule]]
- [[strangler-fig|Strangler Fig]]
- [[legacy-code|Legacy Code]]
- [[refactoring-legacy|Refactoring Legacy]]

---
tags: [Refactoring]
domain: Refactoring
---

# Code Smell

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

A code smell is a surface sign that something deeper may be wrong. Spotting smells like long methods or duplicated code tells you where refactoring will pay off most.

## 📋 Concrete Example

A 500-line function, three levels of nested `if`, and a comment saying "do not touch" are all smells. They do not guarantee bugs, but they signal design problems worth investigating.

## 🔗 Analogy

A bad smell in a fridge does not tell you which food spoiled, only that something is off. You investigate and find the source before it spreads to everything else.

## Related Concepts

- [[technical-debt|Technical Debt]]
- [[boy-scout-rule|Boy Scout Rule]]
- [[extract-function|Extract Function]]

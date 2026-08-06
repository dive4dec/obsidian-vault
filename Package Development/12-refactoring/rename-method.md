---
tags: [Refactoring]
domain: Refactoring
---

# Rename Method

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Good names are the best documentation. When a method name is vague or misleading, renaming it makes code self-explanatory and prevents future confusion.

## 📋 Concrete Example

A method called `process()` tells you nothing. Renaming it to `validate_and_save_invoice()` immediately communicates what it does, so readers do not need to inspect the body.

## 🔗 Analogy

A street sign reading "Stuff" is useless. Renaming it to "Main Street" gives directions meaning, so strangers find their way without asking for help at every step.

## Related Concepts

- [[extract-function|Extract Function]]
- [[code-smell|Code Smell]]
- [[technical-debt|Technical Debt]]

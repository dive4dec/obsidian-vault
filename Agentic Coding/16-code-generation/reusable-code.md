---
tags: [Code-Generation]
domain: Code Generation
---

# Reusable Code

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

Code written to be used in multiple places. The model can refactor duplicated code into reusable functions.

## 📋 Concrete Example

Three places have similar code. Model: 'Extract this into a function: def validate_email(email): ...' Now all three places call validate_email(). DRY: Do not Repeat Yourself.

## 🔗 Analogy

A reusable shopping bag - instead of getting a new plastic bag each time, you use the same sturdy bag. Reusable code is used in multiple places without duplication.

## Related Concepts

- [[code-snippet|Code Snippet]]
- [[refactoring|Refactoring]]
- [[dry-principle|DRY Principle]]

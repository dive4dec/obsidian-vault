---
tags: [Code-Generation]
domain: Code Generation
---

# Logic Error

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

Code runs without crashing but produces wrong results. Harder to find than syntax errors. The model can help debug.

## 📋 Concrete Example

Code: 'def average(a, b): return a + b / 2' (missing parentheses). Returns 4.0 instead of 3.0 for average(2, 4). Logic error: should be (a + b) / 2.

## 🔗 Analogy

A recipe with a wrong step - 'add 2 cups of salt instead of sugar.' The cake bakes fine but tastes terrible. Logic errors produce wrong results without crashing.

## Related Concepts

- [[code-repair|Code Repair]]
- [[debugging|Debugging]]
- [[testing|Testing]]

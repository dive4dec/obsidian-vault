---
tags: [Code-Generation]
domain: Code Generation
---

# Minimal Reproducible Example

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

The smallest piece of code that still shows the bug. Helps isolate the issue. The model can generate this.

## 📋 Concrete Example

Original: 500-line file with a bug. MRE: 5 lines that show the same bug. Easier to understand and fix. 'def f(x): return x[0]  # fails when x is empty.'

## 🔗 Analogy

Trimming a recipe to find the problem - if a cake fails, you simplify: just flour and water. Does it still fail? Yes -> it is the flour. MRE isolates the bug.

## Related Concepts

- [[bug-reproduction|Bug Reproduction]]
- [[debugging|Debugging]]
- [[code-snippet|Code Snippet]]

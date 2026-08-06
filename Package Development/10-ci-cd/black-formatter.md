---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# black formatter

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`black` is an opinionated code formatter that reformats Python files to a single canonical style. It eliminates style debates in code reviews by making formatting automatic and non-negotiable.

## 📋 Concrete Example

You run `black .` and it reformats `x=1` to `x = 1`, wraps long lines, and normalizes quotes. The diff shows only formatting changes, never logic changes.

## 🔗 Analogy

`black` is like a uniform policy at a school. Everyone wears the same outfit (style), so nobody argues about fashion and focus stays on learning (logic).

## Related Concepts

- [[isort|isort]]
- [[ruff|ruff]]
- [[pre-commit|pre commit]]

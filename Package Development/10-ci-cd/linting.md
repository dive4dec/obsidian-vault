---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# linting

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`linting` automatically checks code for style violations, unused imports, and potential bugs without running it. It enforces consistency across a team and catches common mistakes early, making code reviews faster and more focused.

## 📋 Concrete Example

Running `ruff check .` flags `import os` that is never used, `x=1` without spaces around `=`, and a variable defined but never read, all in under a second.

## 🔗 Analogy

`linting` is like a grammar and style checker for your code. It does not run the program, but it flags sloppy sentences before your teacher (reviewer) sees them.

## Related Concepts

- [[ruff-lint|ruff lint]]
- [[pre-commit|pre commit]]
- [[ci-pipeline|ci pipeline]]

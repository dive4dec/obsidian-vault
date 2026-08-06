---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# ruff lint

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`ruff-lint` is the linting mode of `ruff`, a Rust-based Python linter that is 10-100x faster than `flake8`. It catches unused imports, undefined names, and style issues in milliseconds, making it ideal for large codebases and CI.

## 📋 Concrete Example

You add `ruff check .` to your CI pipeline and it reports `F401 'os' imported but unused` and `E501 line too long`, with an `--fix` flag that auto-corrects many issues.

## 🔗 Analogy

`ruff-lint` is like a high-speed security scanner. It processes thousands of bags (lines) per second and still catches every prohibited item (code violation).

## Related Concepts

- [[linting|linting]]
- [[ruff|ruff]]
- [[pre-commit|pre commit]]

---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# ci pipeline

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

A `ci-pipeline` (Continuous Integration) automatically runs tests, linting, and type checks on every push or PR. It catches bugs before they reach the main branch, giving teams confidence to merge frequently.

## 📋 Concrete Example

A CI pipeline runs `ruff check`, `mypy`, and `pytest` in sequence on every PR. If any step fails, the PR is blocked from merging until the issue is fixed.

## 🔗 Analogy

A `ci-pipeline` is like a security checkpoint at an airport. Every bag (code change) goes through the scanner (tests) before it is allowed onto the plane (main branch).

## Related Concepts

- [[cd-pipeline|cd pipeline]]
- [[github-actions|github actions]]
- [[pre-commit|pre commit]]

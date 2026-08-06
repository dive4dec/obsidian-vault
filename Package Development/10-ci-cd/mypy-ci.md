---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# mypy ci

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

Running `mypy` in CI ensures every push and PR is type-checked automatically. It catches type errors that local development might miss, preventing type-related bugs from ever reaching the main branch.

## 📋 Concrete Example

A GitHub Actions step runs `mypy --strict mypackage/` and fails the build if any function receives an argument of the wrong type, blocking the PR until it is fixed.

## 🔗 Analogy

`mypy-ci` is like a bouncer who checks IDs at the club entrance (PR). If your ID (types) does not match, you do not get in (merge), no matter how charming you are.

## Related Concepts

- [[mypy|mypy]]
- [[ci-pipeline|ci pipeline]]
- [[type-hints|type hints]]

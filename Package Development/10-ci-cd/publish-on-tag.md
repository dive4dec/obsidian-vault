---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# publish on tag

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`publish-on-tag` is a CD pattern where pushing a `git tag` like `v1.0.0` triggers an automated release to PyPI. It ties releases to version tags, making the release process reproducible and fully automated.

## 📋 Concrete Example

You push `git tag v1.2.0 && git push origin v1.2.0`, and a GitHub Actions workflow triggered by `on: push: tags: ['v*']` builds the package and publishes to PyPI automatically.

## 🔗 Analogy

`publish-on-tag` is like a vending machine: you insert a coin (push a tag), and the product (package) is automatically dispensed to the shelf (PyPI) with no cashier involved.

## Related Concepts

- [[cd-pipeline|cd pipeline]]
- [[tag-release|tag release]]
- [[semantic-release|semantic release]]

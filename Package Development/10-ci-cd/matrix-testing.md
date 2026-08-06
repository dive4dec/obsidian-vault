---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# matrix testing

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`matrix-testing` runs the same workflow across multiple combinations of OS, Python version, and dependencies. It catches compatibility bugs across environments in a single PR, which is essential for cross-platform libraries.

## 📋 Concrete Example

A workflow uses `matrix: python: ["3.9", "3.10", "3.11", "3.12"]; os: [ubuntu, windows, macos]`, creating 12 parallel jobs that each run the full test suite.

## 🔗 Analogy

`matrix-testing` is like testing a new car model on 12 different road types simultaneously. If it runs smoothly on all of them, you can promise buyers it works everywhere.

## Related Concepts

- [[tox|tox]]
- [[github-actions|github actions]]
- [[workflow-yaml|workflow yaml]]

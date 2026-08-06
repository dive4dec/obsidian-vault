---
tags: [Testing-Quality]
domain: Testing Quality
---

# codecov

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`codecov` is a cloud service that visualizes coverage data and tracks it over time on pull requests. It enforces quality gates by failing CI checks when coverage drops below a threshold.

## 📋 Concrete Example

After CI runs tests with coverage, results upload to `codecov.io`, which posts a comment on your PR showing a diff of coverage and flagging newly untested lines.

## 🔗 Analogy

`codecov` is like a fitness tracker for your codebase. It charts your "exercise" (test coverage) over time and warns you when you start skipping workouts.

## Related Concepts

- [[coverage|coverage]]
- [[github-actions|github actions]]
- [[ci-pipeline|ci pipeline]]

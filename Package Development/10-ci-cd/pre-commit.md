---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# pre-commit

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`pre-commit` runs checks locally before a `git commit` is created, catching issues instantly. It enforces code quality without waiting for CI, saving developers from embarrassing commits and wasted CI minutes.

## 📋 Concrete Example

You install `pre-commit install`, and every `git commit` automatically runs `ruff`, `mypy`, and trailing-whitespace checks. If any fails, the commit is aborted until you fix the issue.

## 🔗 Analogy

`pre-commit` is like a spellchecker that runs before you seal an envelope. It catches typos before the letter is sent, so you never have to apologize for sloppy writing.

## Related Concepts

- [[ci-pipeline|ci pipeline]]
- [[ruff-lint|ruff lint]]
- [[linting|linting]]

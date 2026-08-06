---
tags: [Validation-Typing]
domain: Validation Typing
---

# ruff

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`ruff` is an extremely fast Python linter and formatter written in Rust. It replaces multiple tools like `flake8`, `isort`, and `pyupgrade` with one binary that runs in milliseconds, making it ideal for CI and pre-commit hooks.

## 📋 Concrete Example

You run `ruff check .` and it instantly reports unused imports and style violations, then `ruff format .` reformats all files to a consistent style in under a second.

## 🔗 Analogy

`ruff` is like a Swiss Army knife that also happens to be a power tool. It does the job of five separate tools but finishes before the others even warm up.

## Related Concepts

- [[mypy|mypy]]
- [[type-hints|type hints]]
- [[black-formatter|black formatter]]

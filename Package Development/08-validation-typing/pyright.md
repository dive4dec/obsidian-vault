---
tags: [Validation-Typing]
domain: Validation Typing
---

# pyright

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`pyright` is a fast type checker written in TypeScript by Microsoft, powering VS Code's Python language server. It is faster and often stricter than `mypy`, with excellent IDE integration.

## 📋 Concrete Example

As you type in VS Code, `pyright` underlines `len(5)` in red because `int` has no `len()`, showing the error instantly without needing to run a separate command.

## 🔗 Analogy

`pyright` is like a spellchecker that works live as you type in a word processor, catching mistakes instantly instead of waiting for a separate proofreading step.

## Related Concepts

- [[mypy|mypy]]
- [[type-hints|type hints]]
- [[ruff|ruff]]

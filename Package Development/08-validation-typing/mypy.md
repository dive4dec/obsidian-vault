---
tags: [Validation-Typing]
domain: Validation Typing
---

# mypy

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`mypy` is a static type checker that reads your `type hints` and reports type errors without running your code. It catches bugs like passing a `str` where an `int` is expected, early in development.

## 📋 Concrete Example

You run `mypy mypackage/` and it reports `error: argument 1 of "calculate" has incompatible type "str"; expected "int"`, pointing to the exact file and line.

## 🔗 Analogy

`mypy` is like a grammar checker for code. It reads your essay (code) and underlines type mistakes in red before you submit it (run it).

## Related Concepts

- [[type-hints|type hints]]
- [[pyright|pyright]]
- [[ruff|ruff]]

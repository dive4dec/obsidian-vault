---
tags: [Validation-Typing]
domain: Validation Typing
---

# literal type

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`Literal` restricts a value to a specific set of constants. It is perfect for settings like `mode: Literal["read", "write", "append"]`, letting type checkers catch invalid string values at analysis time.

## 📋 Concrete Example

`def open_file(mode: Literal["r", "w", "a"]): ...` means `open_file("x")` is flagged by `mypy` as an error because `"x"` is not one of the allowed literals.

## 🔗 Analogy

`Literal` is like a multiple-choice question where only options A, B, or C are accepted. Writing "D" is rejected before the test is graded (code is run).

## Related Concepts

- [[type-hints|type hints]]
- [[union-type|union type]]
- [[overload|overload]]

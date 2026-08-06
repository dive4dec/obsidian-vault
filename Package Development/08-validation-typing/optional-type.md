---
tags: [Validation-Typing]
domain: Validation Typing
---

# optional type

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`Optional` marks a value as either a specific type or `None`. It communicates intent clearly and helps type checkers warn you when you forget to handle the `None` case.

## 📋 Concrete Example

`def find_user(id: int) -> Optional[User]:` tells callers the result might be `None`, and `mypy` warns if you access `.name` without checking for `None` first.

## 🔗 Analogy

`Optional` is like a parking spot labeled "vehicle or empty." You must check if a car is there before trying to drive it, or you will crash (into a NoneType error).

## Related Concepts

- [[union-type|union type]]
- [[type-hints|type hints]]
- [[literal-type|literal type]]

---
tags: [Validation-Typing]
domain: Validation Typing
---

# typevar

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`TypeVar` is a type variable used as a placeholder in `Generic` definitions. It lets you express relationships like "the input and output must be the same type" without naming a specific one.

## 📋 Concrete Example

`T = TypeVar("T")` then `def first(items: list[T]) -> T` tells `mypy` that `first([1,2,3])` returns `int` and `first(["a"])` returns `str`, preserving the element type.

## 🔗 Analogy

`TypeVar` is like a blank named slot in a template. You fill it with a concrete type at each use, and the template guarantees consistency across all references to that slot.

## Related Concepts

- [[generic|generic]]
- [[type-hints|type hints]]
- [[overload|overload]]

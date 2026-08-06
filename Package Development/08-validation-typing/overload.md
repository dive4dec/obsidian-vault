---
tags: [Validation-Typing]
domain: Validation Typing
---

# overload

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`overload` lets you declare multiple type signatures for the same function so type checkers understand different call patterns. It improves autocomplete and type accuracy for functions with varying argument types.

## 📋 Concrete Example

You write `@overload def parse(x: str) -> int: ...` and `@overload def parse(x: bytes) -> str: ...`, then implement one real function. `mypy` knows the return type depends on the input type.

## 🔗 Analogy

`overload` is like a restaurant menu listing the same "lunch special" with different sides depending on the day. The kitchen (implementation) is the same, but the menu (type) shows different options.

## Related Concepts

- [[type-hints|type hints]]
- [[typevar|typevar]]
- [[literal-type|literal type]]

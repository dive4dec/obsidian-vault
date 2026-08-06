---
tags: [Validation-Typing]
domain: Validation Typing
---

# union type

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`Union` (or the `X | Y` syntax in Python 3.10+) allows a value to be one of several types. It models real-world data that can legitimately take different forms, like a response that is `str | bytes`.

## 📋 Concrete Example

`def process(data: Union[str, bytes]) -> str:` accepts both `process("hello")` and `process(b"hello")`, and `mypy` ensures you handle both cases inside the function.

## 🔗 Analogy

`Union` is like a coin slot that accepts both coins and tokens. The machine must be ready for either, and the label tells you exactly which kinds are allowed.

## Related Concepts

- [[optional-type|optional type]]
- [[type-hints|type hints]]
- [[literal-type|literal type]]

---
tags: [Validation-Typing]
domain: Validation Typing
---

# attrs

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`attrs` is a third-party library that inspired Python's `dataclass` but offers more features like validation and converters. It is popular when you need runtime checks that `dataclass` does not provide out of the box.

## 📋 Concrete Example

`@define class User: name: str = field(validator=lambda v: len(v) > 0)` rejects empty names at runtime, a feature plain `dataclass` lacks without manual `__post_init__`.

## 🔗 Analogy

If `dataclass` is a basic bicycle, `attrs` is a geared mountain bike. Both get you there, but `attrs` has extra controls for rougher terrain (validation).

## Related Concepts

- [[dataclass|dataclass]]
- [[validator|validator]]
- [[pydantic|pydantic]]

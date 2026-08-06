---
tags: [Validation-Typing]
domain: Validation Typing
---

# protocol

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`Protocol` defines a structural interface: any class with the right methods automatically satisfies it, no inheritance needed. This is called duck typing with static checking, giving flexibility and safety together.

## 📋 Concrete Example

`class Readable(Protocol): def read(self) -> str: ...` means any class with a `read() -> str` method is accepted, whether it is a file, socket, or custom stream.

## 🔗 Analogy

`Protocol` is like a job description: "must be able to drive." Any person who can drive qualifies, regardless of whether they learned at the same driving school (base class).

## Related Concepts

- [[type-hints|type hints]]
- [[generic|generic]]
- [[runtime-validation|runtime validation]]

---
tags: [Validation-Typing]
domain: Validation Typing
---

# typeddict

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`TypedDict` lets you declare the expected keys and value types of a dictionary. It brings type safety to dict-based data structures like JSON configs, without needing a full class.

## 📋 Concrete Example

`class Config(TypedDict): host: str; port: int` means `{"host": "localhost", "port": 8080}` is valid, but `{"host": "localhost"}` is flagged by `mypy` as missing `port`.

## 🔗 Analogy

`TypedDict` is like a fill-in-the-blank form with labeled fields. Each blank expects a specific type of answer, and leaving one blank is flagged as incomplete.

## Related Concepts

- [[type-hints|type hints]]
- [[protocol|protocol]]
- [[dataclass|dataclass]]

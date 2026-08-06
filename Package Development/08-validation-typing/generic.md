---
tags: [Validation-Typing]
domain: Validation Typing
---

# generic

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`Generic` lets you write classes and functions that work with any type while keeping type safety. It is how containers like `list[int]` or `dict[str, User]` specify what they hold.

## 📋 Concrete Example

`class Stack(Generic[T]): def push(self, item: T): ...` lets you create `Stack[int]()` for integers or `Stack[str]()` for strings, with `mypy` checking you never mix them.

## 🔗 Analogy

`Generic` is like a universal container labeled "contents: T." You decide what T is each time, and the label ensures you never accidentally pour soup into a toolbox.

## Related Concepts

- [[typevar|typevar]]
- [[type-hints|type hints]]
- [[protocol|protocol]]

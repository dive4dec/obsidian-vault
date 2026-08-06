---
tags: [Validation-Typing]
domain: Validation Typing
---

# dataclass

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`dataclass` is a built-in Python decorator that auto-generates `__init__`, `__repr__`, and `__eq__` for data containers. It reduces boilerplate while supporting `type hints`, making it the simplest way to model structured data.

## 📋 Concrete Example

`@dataclass class Point: x: float; y: float` lets you write `Point(3.0, 4.0)` and get `repr`, equality comparison, and default values for free, without writing any methods.

## 🔗 Analogy

`dataclass` is like a form template that automatically generates the filing instructions. You fill in the fields, and the paperwork (methods) writes itself.

## Related Concepts

- [[basemodel|basemodel]]
- [[type-hints|type hints]]
- [[attrs|attrs]]

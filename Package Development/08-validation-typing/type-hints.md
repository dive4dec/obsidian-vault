---
tags: [Validation-Typing]
domain: Validation Typing
---

# type hints

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`type hints` are annotations that declare the expected types of variables, parameters, and return values. They do not affect runtime but enable static analysis tools to catch type errors before your code even runs.

## 📋 Concrete Example

You write `def greet(name: str) -> str: return f"Hello, {name}"`, and tools like `mypy` can warn you if someone passes an int where a string is expected.

## 🔗 Analogy

`type hints` are like labels on storage bins that say "papers only" or "electronics only." The bin itself does not enforce the rule, but anyone reading the label knows what belongs inside.

## Related Concepts

- [[mypy|mypy]]
- [[pyright|pyright]]
- [[pydantic|pydantic]]

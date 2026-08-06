---
tags: [Validation-Typing]
domain: Validation Typing
---

# validator

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

A `validator` is a custom function that checks or transforms a field's value beyond what type hints can express. It lets you enforce business rules like "age must be positive" or "email must contain @".

## 📋 Concrete Example

In `pydantic` you write `@field_validator("age") @classmethod def check_age(cls, v): assert v >= 0; return v` to reject negative ages with a clear error.

## 🔗 Analogy

A `validator` is like a customs officer who opens your suitcase and checks the contents against a rulebook, not just the suitcase label.

## Related Concepts

- [[field-validator|field validator]]
- [[pydantic|pydantic]]
- [[runtime-validation|runtime validation]]

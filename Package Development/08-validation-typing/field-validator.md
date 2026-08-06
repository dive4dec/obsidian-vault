---
tags: [Validation-Typing]
domain: Validation Typing
---

# field validator

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`field_validator` is the `pydantic` v2 decorator for validating a single field's value. It replaces the older `validator` decorator and gives cleaner control over before, after, and mode settings.

## 📋 Concrete Example

`@field_validator("email") def normalize(cls, v): return v.lower().strip()` runs after type coercion, ensuring every email is lowercase and trimmed before it reaches your code.

## 🔗 Analogy

`field_validator` is like a specialized inspector on a factory line who only checks one station, ensuring that specific part meets standards before it moves on.

## Related Concepts

- [[validator|validator]]
- [[pydantic|pydantic]]
- [[basemodel|basemodel]]

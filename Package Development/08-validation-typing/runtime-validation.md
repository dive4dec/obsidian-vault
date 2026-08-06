---
tags: [Validation-Typing]
domain: Validation Typing
---

# runtime validation

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`runtime validation` checks data types and constraints while the program is actually running, not just during static analysis. It is essential for data from external sources like APIs, files, or user input where types cannot be guaranteed.

## 📋 Concrete Example

Using `pydantic` or `typeguard`, calling `validate(user_data)` at runtime raises `ValidationError` if the data does not match the schema, catching bad input before it corrupts your system.

## 🔗 Analogy

`runtime validation` is like airport security X-raying bags in real time. Static analysis is the packing checklist at home; runtime validation catches what slips through at the checkpoint.

## Related Concepts

- [[pydantic|pydantic]]
- [[validator|validator]]
- [[schema-validation|schema validation]]

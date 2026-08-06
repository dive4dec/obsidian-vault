---
tags: [Validation-Typing]
domain: Validation Typing
---

# json schema

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`JSON Schema` is a language-agnostic standard for describing and validating JSON data structure. It is widely used in APIs to document expected request and response shapes, enabling validation in any programming language.

## 📋 Concrete Example

A schema `{"type": "object", "properties": {"name": {"type": "string"}}, "required": ["name"]}` rejects `{"age": 5}` because the required `name` field is missing.

## 🔗 Analogy

`JSON Schema` is like an international customs declaration form. No matter what country (language) you arrive in, the form describes exactly what should be in your luggage and in what quantity.

## Related Concepts

- [[schema-validation|schema validation]]
- [[pydantic|pydantic]]
- [[runtime-validation|runtime validation]]

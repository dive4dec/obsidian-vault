---
tags: [Validation-Typing]
domain: Validation Typing
---

# schema validation

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`schema validation` checks data against a formal description (schema) of its structure. It ensures nested data like JSON from an API matches expected fields, types, and constraints before your code processes it.

## 📋 Concrete Example

You define a `pydantic` model with nested fields, then call `Model.model_validate(json_data)` to verify every key and type in the incoming JSON matches the schema, rejecting mismatches.

## 🔗 Analogy

`schema validation` is like checking a shipment against a packing slip. Every item must match the list in name, quantity, and type, or the shipment is rejected.

## Related Concepts

- [[json-schema|json schema]]
- [[pydantic|pydantic]]
- [[runtime-validation|runtime validation]]

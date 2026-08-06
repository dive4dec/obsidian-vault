---
tags: [Validation-Typing]
domain: Validation Typing
---

# pydantic

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`pydantic` validates data at runtime using Python type hints, automatically converting and checking inputs. It is the backbone of modern APIs and config management, catching bad data before it causes cryptic errors downstream.

## 📋 Concrete Example

You define `class User(BaseModel): name: str; age: int`, and `User(name="Alice", age="25")` automatically converts the string `"25"` to int. Passing `age="old"` raises a clear validation error.

## 🔗 Analogy

`pydantic` is like a ticket inspector who checks every passenger before boarding. Invalid tickets are rejected with a clear reason, and valid ones get stamped for travel.

## Related Concepts

- [[basemodel|basemodel]]
- [[validator|validator]]
- [[type-hints|type hints]]

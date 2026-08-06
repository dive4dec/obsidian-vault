---
tags: [Validation-Typing]
domain: Validation Typing
---

# basemodel

> **Domain:** [[_validation-typing-moc|Validation Typing]]

## 🎯 Motivation

`BaseModel` is the base class in `pydantic` that gives any class automatic validation, serialization, and parsing. Inheriting from it transforms a plain data class into a robust, self-checking model.

## 📋 Concrete Example

`class Product(BaseModel): name: str; price: float` gives you `Product(name="Pen", price=1.99).model_dump()` which returns `{"name": "Pen", "price": 1.99}` as a dict.

## 🔗 Analogy

`BaseModel` is like a mold for casting metal parts. Pour in raw material (data), and the mold guarantees every part comes out in the right shape with no defects.

## Related Concepts

- [[pydantic|pydantic]]
- [[validator|validator]]
- [[dataclass|dataclass]]

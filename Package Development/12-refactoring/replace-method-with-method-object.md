---
tags: [Refactoring]
domain: Refactoring
---

# Replace Method with Method Object

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Some methods are long and hold lots of local variables, making extraction hard. Turning the method into its own class lets you break it into smaller methods that share state easily.

## 📋 Concrete Example

A complex `calculate_quote()` with 8 local variables becomes a `QuoteCalculator` class. The locals become fields, and you can extract `apply_base_rate()`, `apply_discount()`, etc., freely.

## 🔗 Analogy

A chef trying to cook a five-course meal on one tiny cutting board struggles. Giving them a whole kitchen with counters and stations lets each dish be prepared in its own space.

## Related Concepts

- [[extract-function|Extract Function]]
- [[extract-class|Extract Class]]
- [[introduce-parameter-object|Introduce Parameter Object]]

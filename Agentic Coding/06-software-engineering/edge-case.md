---
tags: [Software-Engineering]
domain: Software Engineering
---

# Edge Case

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Unusual or extreme inputs that might break the code: empty lists, zero, negative, very large, null.

## 📋 Concrete Example

Edge cases for sort(): empty list [], single item [5], all same [3, 3, 3], very large [1M items], null input, negative [-5, -1, -10]. The code must handle these correctly. Edge cases are where bugs hide.

## 🔗 Analogy

Edge cases are like extreme weather tests for a building - what happens in a typhoon? In an earthquake? In flooding? Normal conditions (common inputs) are easy; extreme conditions (edge cases) reveal weaknesses.

## Related Concepts

- [[test-case|Test Case]]
- [[unit-test|Unit Test]]
- [[robustness|Robustness]]

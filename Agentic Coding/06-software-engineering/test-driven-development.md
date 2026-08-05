---
tags: [Software-Engineering]
domain: Software Engineering
---

# Test-Driven Development

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Write tests before code. Red (test fails) -> Green (code passes) -> Refactor (improve). TDD cycle.

## 📋 Concrete Example

TDD: 1) Write test: assert is_prime(7) == True. 2) Run: FAIL (function does not exist). Red. 3) Write code: def is_prime(n): return True. 4) Run: PASS. Green. 5) Write more tests, fix code. Cycle.

## 🔗 Analogy

TDD is like writing the exam before studying - you write the test (what should the code do?), then learn (write code) until you pass. It ensures you know the goal before you start coding.

## Related Concepts

- [[testing|Testing]]
- [[unit-test|Unit Test]]
- [[red-green-refactor|Red-Green-Refactor]]

---
tags: [Testing-Quality]
domain: Testing Quality
---

# unit test

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

A `unit test` verifies a single function or method in isolation. Unit tests are fast, focused, and form the foundation of a healthy test pyramid, catching logic errors at the smallest level.

## 📋 Concrete Example

You test `def is_even(n)` with `assert is_even(4) is True` and `assert is_even(3) is False`, checking only the function's logic without any database or network.

## 🔗 Analogy

A `unit test` is like checking each brick individually before building a wall. If the bricks are solid, the wall is more likely to stand.

## Related Concepts

- [[integration-test|integration test]]
- [[mock|mock]]
- [[pytest|pytest]]

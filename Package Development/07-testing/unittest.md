---
tags: [Testing-Quality]
domain: Testing Quality
---

# unittest

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`unittest` is Python's built-in testing framework, requiring no installation. It uses a class-based style with `assertEqual` methods, making it useful when you need a zero-dependency test suite.

## 📋 Concrete Example

You create a class `TestMath(unittest.TestCase)` with a method `test_add` that calls `self.assertEqual(add(1, 1), 2)`, then run it with `python -m unittest`.

## 🔗 Analogy

`unittest` is like a toolkit that comes free with your toolbox. It works well, but you must assemble the pieces yourself rather than using a pre-built machine.

## Related Concepts

- [[pytest|pytest]]
- [[doctest|doctest]]
- [[unit-test|unit test]]

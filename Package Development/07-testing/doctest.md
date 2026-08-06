---
tags: [Testing-Quality]
domain: Testing Quality
---

# doctest

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`doctest` searches your docstrings for lines that look like interactive Python sessions and runs them as tests. It ensures your documentation examples actually work, preventing stale or broken code samples.

## 📋 Concrete Example

A docstring contains `>>> add(2, 3)\n5`, and running `python -m doctest -v` checks that `add(2, 3)` really returns `5`, failing if it does not.

## 🔗 Analogy

`doctest` is like a recipe book that self-checks. Every recipe is cooked by a robot to verify the steps actually produce the described dish.

## Related Concepts

- [[docstring-formats|docstring formats]]
- [[unittest|unittest]]
- [[pytest|pytest]]

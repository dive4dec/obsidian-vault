---
tags: [Testing-Quality]
domain: Testing Quality
---

# hypothesis

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`hypothesis` is the leading property-based testing library for Python. It generates inputs based on type hints, shrinks failing cases to the simplest possible example, and integrates seamlessly with `pytest`.

## 📋 Concrete Example

You write `@given(st.lists(st.integers()))` above a test, and `hypothesis` feeds dozens of random integer lists, automatically finding the smallest list that breaks your code if a bug exists.

## 🔗 Analogy

`hypothesis` is like a detective who not only finds a clue but keeps simplifying the story until only the essential evidence remains, making the bug obvious.

## Related Concepts

- [[property-based-testing|property based testing]]
- [[pytest|pytest]]
- [[parametrize|parametrize]]

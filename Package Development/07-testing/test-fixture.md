---
tags: [Testing-Quality]
domain: Testing Quality
---

# test fixture

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

A `test fixture` provides reusable setup data or objects for multiple tests. Fixtures keep tests DRY (Don't Repeat Yourself) by centralizing preparation steps like creating a database connection or sample data.

## 📋 Concrete Example

In `pytest`, you define `@pytest.fixture def sample_user(): return {"name": "Alice"}`, and any test function that accepts `sample_user` as a parameter receives the same dict.

## 🔗 Analogy

A `test fixture` is like a stage crew that sets up the props before each scene. The actors (tests) just walk on and perform, without building their own furniture.

## Related Concepts

- [[pytest|pytest]]
- [[fixture-scope|fixture scope]]
- [[conftest|conftest]]

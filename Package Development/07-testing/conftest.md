---
tags: [Testing-Quality]
domain: Testing Quality
---

# conftest

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`conftest.py` is a special `pytest` file that holds shared fixtures and hooks available to all tests in its directory and below. It centralizes test setup so you do not repeat the same fixtures in every file.

## 📋 Concrete Example

You put a `@pytest.fixture def db_connection()` in `conftest.py`, and every test file in that folder can use `db_connection` as a parameter without importing it.

## 🔗 Analogy

`conftest.py` is like a shared whiteboard in a classroom. Any student (test) in the room can read the formulas written there without carrying their own copy.

## Related Concepts

- [[test-fixture|test fixture]]
- [[pytest|pytest]]
- [[fixture-scope|fixture scope]]

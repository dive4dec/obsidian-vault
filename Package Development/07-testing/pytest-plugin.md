---
tags: [Testing-Quality]
domain: Testing Quality
---

# pytest plugin

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

A `pytest plugin` extends `pytest` with new fixtures, markers, or command-line options. The plugin ecosystem lets you add features like async testing, Django support, or coverage without modifying your tests.

## 📋 Concrete Example

You install `pytest-asyncio` and add `@pytest.mark.asyncio` to your test, enabling `pytest` to run `async def` test functions that `await` coroutines.

## 🔗 Analogy

A `pytest plugin` is like an app you install on your phone. The phone (pytest) stays the same, but each app adds a new capability like a camera filter or a timer.

## Related Concepts

- [[pytest|pytest]]
- [[conftest|conftest]]
- [[test-fixture|test fixture]]

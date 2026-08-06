---
tags: [Testing-Quality]
domain: Testing Quality
---

# fixture scope

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`fixture scope` controls how long a fixture's value is reused across tests: `function`, `class`, `module`, or `session`. Choosing the right scope balances speed against test isolation.

## 📋 Concrete Example

A `@pytest.fixture(scope="session")` database connection is created once for the entire test run, while `scope="function"` recreates it for every single test for full isolation.

## 🔗 Analogy

`fixture scope` is like deciding whether to refill your water bottle once per class (session) or once per question (function). More refills mean more isolation but slower pacing.

## Related Concepts

- [[test-fixture|test fixture]]
- [[conftest|conftest]]
- [[pytest|pytest]]

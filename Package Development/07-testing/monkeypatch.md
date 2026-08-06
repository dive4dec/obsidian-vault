---
tags: [Testing-Quality]
domain: Testing Quality
---

# monkeypatch

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`monkeypatch` is a `pytest` feature that dynamically modifies attributes or environment variables during a test. It is perfect for testing code that depends on settings, env vars, or time without permanent side effects.

## 📋 Concrete Example

Inside a test you call `monkeypatch.setenv("API_KEY", "fake-key")`, and the code under test reads that env var. After the test ends, the original environment is restored.

## 🔗 Analogy

`monkeypatch` is like temporarily swapping the batteries in a remote control to test if it works with a different brand. After testing, you put the original batteries back.

## Related Concepts

- [[mock|mock]]
- [[patch|patch]]
- [[pytest|pytest]]

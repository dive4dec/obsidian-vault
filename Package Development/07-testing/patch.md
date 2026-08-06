---
tags: [Testing-Quality]
domain: Testing Quality
---

# patch

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`patch` temporarily replaces an object during a test, then restores it automatically afterward. It is the primary tool for mocking functions or classes your code imports, enabling truly isolated unit tests.

## 📋 Concrete Example

You use `@patch("mymodule.requests.get")` to swap the real HTTP call with a mock that returns fake data, ensuring the test never hits the network.

## 🔗 Analogy

`patch` is like a stunt double who steps in for the lead actor during a dangerous scene, then leaves so the real actor can return for the next scene.

## Related Concepts

- [[mock|mock]]
- [[monkeypatch|monkeypatch]]
- [[pytest|pytest]]

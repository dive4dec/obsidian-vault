---
tags: [Testing-Quality]
domain: Testing Quality
---

# mock

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

A `mock` is a fake object that simulates the behavior of a real one, like an API or database. Mocking lets you test code in isolation without slow or unreliable external dependencies.

## 📋 Concrete Example

You replace a payment gateway with a `Mock` that always returns `{"status": "success"}`, so your test verifies the order logic without calling a real bank.

## 🔗 Analogy

A `mock` is like a crash-test dummy standing in for a real passenger. You can test the car's safety systems without risking an actual person.

## Related Concepts

- [[patch|patch]]
- [[monkeypatch|monkeypatch]]
- [[unit-test|unit test]]

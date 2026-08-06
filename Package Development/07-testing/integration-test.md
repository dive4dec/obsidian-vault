---
tags: [Testing-Quality]
domain: Testing Quality
---

# integration test

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

An `integration test` checks that multiple components work together correctly, like a database plus an API. It catches issues that unit tests miss, such as data format mismatches between modules.

## 📋 Concrete Example

A test starts a real test database, calls `create_user()` which writes to it, then queries the database to confirm the row exists, verifying the full stack works end to end.

## 🔗 Analogy

If a unit test checks each instrument alone, an integration test is the full orchestra rehearsal. Each instrument may work solo, but they must sound good together.

## Related Concepts

- [[unit-test|unit test]]
- [[pytest|pytest]]
- [[test-fixture|test fixture]]

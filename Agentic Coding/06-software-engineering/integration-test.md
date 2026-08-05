---
tags: [Software-Engineering]
domain: Software Engineering
---

# Integration Test

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Testing how multiple components work together. Catches issues that unit tests miss.

## 📋 Concrete Example

Integration test: test_login_flow(): 1) Create user in database. 2) Send login request. 3) Check response token. 4) Use token to access protected page. Tests the full flow: database + API + authentication.

## 🔗 Analogy

An integration test is like a dress rehearsal with all actors - each actor (component) was checked individually (unit test), but now they perform together. Chemistry, timing, and flow are tested. Integration tests check the whole system.

## Related Concepts

- [[testing|Testing]]
- [[unit-test|Unit Test]]
- [[end-to-end-test|End-to-End Test]]

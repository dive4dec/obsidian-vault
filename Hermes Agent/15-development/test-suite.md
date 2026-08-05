---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Test Suite

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The complete collection of Hermes tests. ~3000 tests across tools, agent, CLI, gateway, cron, sessions, and more.

## Concrete Example

Full suite: python -m pytest tests/ -o addopts= -q. 3000 tests run. ~30 seconds. All must pass before a release. The test suite is the quality gate.

## Analogy

A final exam covering the entire semester - every topic is tested. You must pass all sections. The test suite is the final exam for Hermes.

## Related Concepts

- [[testing|Testing]]
- [[pytest|Pytest]]
- [[test-coverage|Test Coverage]]

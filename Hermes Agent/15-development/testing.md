---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Testing

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Hermes has ~3000 pytest tests. Run: python -m pytest tests/. Tests cover tools, agent, CLI, gateway, cron, and more.

## Concrete Example

python -m pytest tests/tools/ -q. Output: 45 passed. Each test verifies a specific feature. Tests auto-redirect HERMES_HOME to temp dirs. They never touch real ~/.hermes/.

## Analogy

A dress rehearsal before a play - you practice everything to find problems before the real show. Testing is the dress rehearsal for Hermes code.

## Related Concepts

- [[pytest|Pytest]]
- [[test-suite|Test Suite]]
- [[continuous-integration|Continuous Integration]]

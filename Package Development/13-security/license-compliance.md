---
tags: [Security]
domain: Security
---

# License Compliance

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Open-source licenses have different rules — some require attribution, others demand source disclosure. Checking dependency licenses prevents legal surprises that could block your project's release.

## 📋 Concrete Example

Your package uses a `GPL-3.0` library, but you want to distribute closed-source. This creates a conflict. Tools like `pip-licenses` list every dependency's license so you catch issues early.

## 🔗 Analogy

Borrowing a friend's bicycle is fine for a ride, but if they said "only if you paint it my favorite color," that is a condition. Licenses are those conditions — read them before using.

## Related Concepts

- [[dependency-vulnerability|Dependency Vulnerability]]
- [[pypi-ecosystem|PyPI Ecosystem]]
- [[dependency-tree|Dependency Tree]]

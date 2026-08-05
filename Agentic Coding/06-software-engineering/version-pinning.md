---
tags: [Software-Engineering]
domain: Software Engineering
---

# Version Pinning

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Specifying exact versions of dependencies to prevent unexpected breaks.

## 📋 Concrete Example

Pin: 'requests==2.31.0' (exactly this version). If requests releases 2.32 with breaking changes, your code is safe. You upgrade deliberately, not accidentally.

## 🔗 Analogy

Version pinning is like locking in a flight price - you pay exactly the price you saw. If prices go up, you are not affected. Pinning locks dependency versions to prevent unexpected breaks.

## Related Concepts

- [[dependency|Dependency]]
- [[requirements-file|Requirements File]]
- [[backward-compatibility|Backward Compatibility]]

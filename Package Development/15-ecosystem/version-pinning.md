---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Version Pinning

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

Pinning exact versions prevents a dependency update from silently breaking your project. Reproducible builds depend on pinning so the same install today and next month produces identical environments.

## 📋 Concrete Example

Write `requests==2.31.0` in `requirements.txt` instead of `requests`. Tomorrow `requests` 2.32 might drop a feature you use. The pin locks the tested version until you deliberately upgrade.

## 🔗 Analogy

A recipe says "2 teaspoons of salt," not "some salt." The precise amount makes the dish turn out the same every time. "Some salt" leaves each batch to chance.

## Related Concepts

- [[requirements-txt|requirements.txt]]
- [[lock-file|Lock File]]
- [[dependency-resolution|Dependency Resolution]]

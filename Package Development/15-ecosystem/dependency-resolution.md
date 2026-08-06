---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Dependency Resolution

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

When multiple packages need different versions of the same dependency, the installer must find a compatible set. Understanding resolution helps you debug the dreaded "version conflict" errors.

## 📋 Concrete Example

Package A needs `urllib3>=1.26` and package B needs `urllib3<2.0`. The resolver picks `urllib3==1.26.x` — the overlap. If A demanded `>=2.0`, there is no overlap, and installation fails.

## 🔗 Analogy

Two friends want to eat together: one insists on sushi, the other on pizza. If a restaurant serves both, they eat happily. If not, no meal satisfies both — a conflict with no resolution.

## Related Concepts

- [[dependency-tree|Dependency Tree]]
- [[version-pinning|Version Pinning]]
- [[transitive-dependencies|Transitive Dependencies]]

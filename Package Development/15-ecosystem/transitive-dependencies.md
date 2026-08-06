---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Transitive Dependencies

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

Dependencies you did not explicitly install — pulled in by your direct dependencies — are transitive. They can break your project when they update, so you must be aware of them.

## 📋 Concrete Example

You install `requests`, which depends on `urllib3`, which depends on `certifi`. You never wrote `urllib3` in your requirements, but if `urllib3` breaks, `requests` — and your project — breaks too.

## 🔗 Analogy

You invite a friend to dinner, and they bring a friend you never met. That stranger sits at your table and affects the conversation. Transitive dependencies are those uninvited guests.

## Related Concepts

- [[dependency-tree|Dependency Tree]]
- [[dependency-graph|Dependency Graph]]
- [[dependency-resolution|Dependency Resolution]]

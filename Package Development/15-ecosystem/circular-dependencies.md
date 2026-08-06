---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Circular Dependencies

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

When package A depends on B and B depends on A, neither can be installed cleanly. Detecting and breaking cycles is essential for a healthy, installable package graph.

## 📋 Concrete Example

If `auth-tools` imports `db-tools` and `db-tools` imports `auth-tools`, the cycle blocks installation. Fix it by extracting shared code into a third package `common` that both depend on instead.

## 🔗 Analogy

Two people standing in a doorway, each saying "after you." Neither moves. Someone must step out of the cycle — by taking a separate door — so both can proceed.

## Related Concepts

- [[dependency-graph|Dependency Graph]]
- [[transitive-dependencies|Transitive Dependencies]]
- [[separation-of-concerns|Separation of Concerns]]

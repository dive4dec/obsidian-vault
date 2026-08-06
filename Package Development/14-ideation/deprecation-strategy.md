---
tags: [Package-Ideation]
domain: Package Ideation
---

# Deprecation Strategy

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

APIs evolve, and removing features breaks users. A deprecation strategy — warnings, migration guides, and timelines — lets users adapt gradually instead of facing sudden breakage.

## 📋 Concrete Example

Renaming `parse_file()` to `parse()`: first release `parse()` alongside the old name, emit `DeprecationWarning` from `parse_file()`, document the change, then remove `parse_file()` in version `2.0`.

## 🔗 Analogy

A bus route change is announced weeks ahead with notices at every stop. Suddenly canceling the route one morning strands riders — good transit authorities give warning and alternatives.

## Related Concepts

- [[package-scope|Package Scope]]
- [[version-pinning|Version Pinning]]
- [[technical-debt|Technical Debt]]

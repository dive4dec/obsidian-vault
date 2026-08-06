---
tags: [Package-Ideation]
domain: Package Ideation
---

# Wrapper vs Original

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

Some packages wrap an existing tool with a friendlier Python API; others are original implementations. Knowing which you are building sets expectations for scope, maintenance, and attribution.

## 📋 Concrete Example

`requests` is an original Python HTTP library. `httpx-requests` might wrap `httpx` to mimic `requests`'s API. A wrapper is thinner but depends on the upstream tool's stability and license.

## 🔗 Analogy

A translation of a novel is not a new novel — it depends on the original text. If the author rewrites a chapter, the translator must update too. Wrappers have that same dependency.

## Related Concepts

- [[package-scope|Package Scope]]
- [[dependency-tree|Dependency Tree]]
- [[license-compliance|License Compliance]]

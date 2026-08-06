---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Dependency Tree

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

Your package depends on packages that depend on packages. Visualizing this tree reveals how many things you rely on and helps debug version conflicts when branches demand different versions.

## 📋 Concrete Example

`pip show requests` lists direct dependencies like `urllib3` and `certifi`. Tools like `pipdeptree` draw the full tree, showing that `urllib3` is also required by `botocore` — a shared trunk.

## 🔗 Analogy

A family tree shows you and your parents, but also grandparents and cousins. Seeing the whole tree explains why a trait (or a version conflict) appears — it comes from a branch you forgot existed.

## Related Concepts

- [[dependency-graph|Dependency Graph]]
- [[transitive-dependencies|Transitive Dependencies]]
- [[dependency-resolution|Dependency Resolution]]

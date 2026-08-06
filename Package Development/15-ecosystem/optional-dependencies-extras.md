---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Optional Dependencies Extras

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

Not every user needs every feature. Extras let users install optional dependencies with `pip install yourpkg[feature]`, keeping the base install lean while enabling power features on demand.

## 📋 Concrete Example

In `pyproject.toml`: `[project.optional-dependencies] plot = ["matplotlib"]`. Users run `pip install timeflex[plot]` to get plotting support; those who do not need it install plain `timeflex` with no extra weight.

## 🔗 Analogy

A phone's base model has no headphones. If you want them, you buy the "audio bundle." Most users skip it; those who want it pay a little more — everyone gets exactly what they need.

## Related Concepts

- [[composable-packages|Composable Packages]]
- [[plugin-ecosystem|Plugin Ecosystem]]
- [[dependency-tree|Dependency Tree]]

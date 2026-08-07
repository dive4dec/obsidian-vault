---
tags: [Python-Packaging]
domain: Python Packaging
---

# optional-dependencies

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

Extra packages for optional features, grouped under `[project.optional-dependencies]`. Users install them with `pip install mypkg[extra]`.

## 📋 Concrete Example

Define `dev = ["pytest", "ruff"]` so `pip install mypkg[dev]` adds testing tools.

## 🔗 Analogy

Optional dependencies are add-ons at a restaurant — pay extra for cheese or dessert, the base meal still works.

## Related Concepts

- [[dependencies|dependencies]]
- [[metadata|metadata]]
- [[pyproject-toml|pyproject.toml]]
- [[hermes-acp-sdk|hermes-acp-sdk]]

---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# pip-tools

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

`pip-tools` generates pinned `requirements.txt` files from high-level input. It bridges the gap between loose version specifiers and the exact pins needed for reproducible builds.

## 📋 Concrete Example

Write `requests>=2.0` in `requirements.in`, then run `pip-compile requirements.in`. It outputs `requests==2.31.0` plus all transitive pins in `requirements.txt`, resolved and pinned for you.

## 🔗 Analogy

A travel agent takes your loose request "somewhere warm in Asia" and returns a detailed itinerary with flights, hotels, and dates locked in. You get reproducibility without manually researching every step.

## Related Concepts

- [[requirements-txt|requirements.txt]]
- [[version-pinning|Version Pinning]]
- [[uv|uv]]

---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Lock File

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

A lock file records the exact resolved versions of every dependency, including transitive ones. It guarantees bit-for-bit reproducible environments across different machines and time.

## 📋 Concrete Example

`uv.lock` or `poetry.lock` pins not just `requests==2.31.0` but also `urllib3==2.0.4` and `certifi==2023.7.22` — the full resolved tree. Committing the lock file makes CI use identical versions.

## 🔗 Analogy

A photo of your completed Lego model records every brick and color. Another person with the same photo and the same brick set can rebuild it exactly. Without the photo, they might use different bricks.

## Related Concepts

- [[version-pinning|Version Pinning]]
- [[requirements-txt|requirements.txt]]
- [[uv|uv]]

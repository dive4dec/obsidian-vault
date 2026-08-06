---
tags: [Version-Control]
domain: Version Control
---

# gitignore

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

A `.gitignore` file tells `git` which files to skip, keeping secrets, caches, and build artifacts out of your repository. This prevents accidental commits of sensitive data and keeps diffs clean.

## 📋 Concrete Example

You create a `.gitignore` containing `__pycache__/`, `.env`, and `*.pyc` so `git` never tracks Python cache files or your local environment variables.

## 🔗 Analogy

`.gitignore` is like a bouncer at a club with a guest list. Files on the list are turned away at the door and never let into the repository.

## Related Concepts

- [[git|git]]
- [[commit|commit]]
- [[monorepo|monorepo]]

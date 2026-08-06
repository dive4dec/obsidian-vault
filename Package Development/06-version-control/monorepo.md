---
tags: [Version-Control]
domain: Version Control
---

# monorepo

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

A `monorepo` stores multiple packages or services in a single `git` repository. It simplifies sharing code, consistent tooling, and atomic changes across projects, at the cost of a larger repo.

## 📋 Concrete Example

A company keeps `frontend`, `backend`, and `shared-lib` folders in one repo. A developer updates a shared type and commits the frontend and backend changes that depend on it in a single `commit`.

## 🔗 Analogy

A `monorepo` is like a big toolbox where every tool lives together. You grab the hammer and nails in one trip, instead of walking to three different sheds.

## Related Concepts

- [[submodule|submodule]]
- [[git|git]]
- [[gitignore|gitignore]]

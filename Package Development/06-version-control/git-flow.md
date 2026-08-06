---
tags: [Version-Control]
domain: Version Control
---

# git flow

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

`git flow` is a branching model with dedicated branches for features, releases, and hotfixes. It gives teams a structured way to manage complex releases, though smaller projects often prefer simpler workflows.

## 📋 Concrete Example

In `git flow`, you create `feature/payment` from `develop`, merge it back to `develop`, then merge `develop` into `main` when ready to release, tagging `main` with a version number.

## 🔗 Analogy

`git flow` is like a restaurant kitchen with separate stations: prep (feature), cooking (develop), and plating (main). Each dish moves through stations in a set order before serving.

## Related Concepts

- [[branch|branch]]
- [[tag-release|tag release]]
- [[pull-request|pull request]]

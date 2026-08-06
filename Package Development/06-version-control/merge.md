---
tags: [Version-Control]
domain: Version Control
---

# merge

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

`merge` combines changes from one branch into another, bringing your feature work back to the main line. Understanding merge conflicts is crucial because they happen whenever two people edit the same lines differently.

## 📋 Concrete Example

After finishing a feature on `feature/login`, you run `git merge feature/login` while on `main` to combine the changes. If conflicts appear, `git` marks them with `<<<<<<<` markers for you to resolve.

## 🔗 Analogy

Merging is like combining two recipe drafts into one cookbook. If both authors changed the same ingredient list, you must decide which version to keep before publishing.

## Related Concepts

- [[branch|branch]]
- [[rebase|rebase]]
- [[pull-request|pull request]]

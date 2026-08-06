---
tags: [Version-Control]
domain: Version Control
---

# cherry pick

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

`git cherry-pick` copies a single commit from one branch to another. It is useful when you need a specific bug fix in two places without merging an entire branch.

## 📋 Concrete Example

A hotfix commit on `main` is cherry-picked onto a `release/2.0` branch with `git cherry-pick abc1234` so the fix is available in both versions without merging everything.

## 🔗 Analogy

Cherry-picking is like picking one ripe cherry from a branch and grafting it onto another tree, instead of merging the entire branch.

## Related Concepts

- [[commit|commit]]
- [[branch|branch]]
- [[rebase|rebase]]

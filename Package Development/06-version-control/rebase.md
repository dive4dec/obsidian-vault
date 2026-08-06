---
tags: [Version-Control]
domain: Version Control
---

# rebase

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

`rebase` moves your branch's commits on top of another branch, creating a clean linear history. It is powerful for keeping project history readable, but it rewrites commit history so it must be used carefully on shared branches.

## 📋 Concrete Example

Before merging a feature, you run `git rebase main` to replay your commits on top of the latest `main`, resolving any conflicts along the way for a tidy history.

## 🔗 Analogy

`rebase` is like reorganizing your stack of index cards so they sit neatly on top of your friend's stack, instead of stapling two messy stacks together.

## Related Concepts

- [[merge|merge]]
- [[branch|branch]]
- [[cherry-pick|cherry pick]]

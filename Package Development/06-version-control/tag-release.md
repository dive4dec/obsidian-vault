---
tags: [Version-Control]
domain: Version Control
---

# tag release

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

A `tag` marks a specific commit as a release point, like `v1.0.0`. Tags are how packages communicate version numbers to users, and they trigger automated release pipelines on platforms like `github`.

## 📋 Concrete Example

You run `git tag v2.1.0` then `git push origin v2.1.0`, and `github` automatically creates a release page and triggers a CI job that publishes your package to PyPI.

## 🔗 Analogy

A `tag` is like a bookmark in a novel labeled "Chapter 1 Final Draft." It tells readers exactly which version is the official starting point.

## Related Concepts

- [[commit|commit]]
- [[changelog|changelog]]
- [[publish-on-tag|publish on tag]]

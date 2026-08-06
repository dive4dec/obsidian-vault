---
tags: [Version-Control]
domain: Version Control
---

# submodule

> **Domain:** [[_version-control-moc|Version Control]]

## 🎯 Motivation

A `submodule` embeds one `git` repository inside another, letting you track an external dependency at a specific commit. It is useful for sharing a library across projects without duplicating code.

## 📋 Concrete Example

You add a shared utilities repo as a submodule with `git submodule add https://github.com/team/utils.git libs/utils`, and your main repo records the exact commit of `utils` it depends on.

## 🔗 Analogy

A `submodule` is like a book that includes a CD of supplementary material. The book notes exactly which edition of the CD to use, even if new editions are released later.

## Related Concepts

- [[clone|clone]]
- [[monorepo|monorepo]]
- [[remote|remote]]

---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# release drafter

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`release-drafter` is a GitHub Action that automatically generates draft release notes from merged PRs since the last release. It saves maintainers from manually compiling changelogs and ensures nothing is missed.

## 📋 Concrete Example

Every time a PR is merged, `release-drafter` appends its title to a draft release. When ready to publish, the maintainer clicks "Publish" and the accumulated notes become the official release notes.

## 🔗 Analogy

`release-drafter` is like a secretary who keeps a running list of everything you accomplished each week. When it is time for your review, the list is already written.

## Related Concepts

- [[semantic-release|semantic release]]
- [[cd-pipeline|cd pipeline]]
- [[github-actions|github actions]]

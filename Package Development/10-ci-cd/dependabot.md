---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# dependabot

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`dependabot` automatically checks for outdated or vulnerable dependencies and opens PRs to update them. It keeps your project secure and up to date without manual monitoring, which is especially valuable for busy maintainers.

## 📋 Concrete Example

`dependabot` detects `requests` has a security advisory and opens a PR bumping `requests` from `2.28.0` to `2.31.0`, with the changelog linked. CI runs on the PR to verify nothing breaks.

## 🔗 Analogy

`dependabot` is like a smoke detector for your dependencies. It alerts you the moment a library has a known vulnerability, and even drafts the fix (PR) for you to approve.

## Related Concepts

- [[github-actions|github actions]]
- [[ci-pipeline|ci pipeline]]
- [[release-drafter|release drafter]]

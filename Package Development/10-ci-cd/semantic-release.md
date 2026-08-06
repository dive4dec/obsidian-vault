---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# semantic release

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`semantic-release` fully automates versioning and publishing based on commit messages following conventional commits. It removes human error from version bumps and release notes, making releases fully deterministic.

## 📋 Concrete Example

Commits like `feat: add dark mode` trigger a minor version bump, while `fix: patch login bug` triggers a patch bump. `semantic-release` reads these, bumps the version, publishes to PyPI, and writes the changelog.

## 🔗 Analogy

`semantic-release` is like an autopilot for releases. You steer with commit messages; it decides the speed (version bump), announces the destination (changelog), and lands (publishes) automatically.

## Related Concepts

- [[publish-on-tag|publish on tag]]
- [[changelog|changelog]]
- [[release-drafter|release drafter]]

---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# github actions

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`github-actions` is GitHub's built-in CI/CD platform that runs automated workflows on every push or PR. It requires no external server and integrates seamlessly with your repo, making it the easiest way to start automating tests and deployments.

## 📋 Concrete Example

You create `.github/workflows/test.yml` that runs `pytest` on every push. GitHub automatically spins up a runner, installs your package, and reports a green check or red X on the commit.

## 🔗 Analogy

`github-actions` is like a robot assistant in your repo. Every time you submit code, the robot automatically tests it and puts a sticker (check or X) on your submission.

## Related Concepts

- [[workflow-yaml|workflow yaml]]
- [[action-runner|action runner]]
- [[ci-pipeline|ci pipeline]]

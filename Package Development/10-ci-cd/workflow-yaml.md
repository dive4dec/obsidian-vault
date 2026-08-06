---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# workflow yaml

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`workflow-yaml` is the configuration file that defines a GitHub Actions workflow: triggers, jobs, and steps. Understanding its structure is essential for customizing CI to run tests, lint, build, and deploy automatically.

## 📋 Concrete Example

A `.github/workflows/ci.yml` file specifies `on: [push, pull_request]`, a `job` named `test`, and `steps` that checkout code, install dependencies with `uv`, and run `pytest`.

## 🔗 Analogy

`workflow-yaml` is like a recipe card for your CI robot. It lists the triggers (when to cook), ingredients (dependencies), and steps (commands) to produce a finished dish (tested code).

## Related Concepts

- [[github-actions|github actions]]
- [[ci-pipeline|ci pipeline]]
- [[matrix-testing|matrix testing]]

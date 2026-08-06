---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# action runner

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

An `action-runner` is the machine (virtual or self-hosted) that executes your GitHub Actions workflow steps. Choosing between GitHub-hosted and self-hosted runners affects speed, cost, and what software is pre-installed.

## 📋 Concrete Example

A workflow specifies `runs-on: ubuntu-latest`, and GitHub provisions a fresh Ubuntu VM that executes your steps, then is destroyed after the job completes.

## 🔗 Analogy

An `action-runner` is like a temporary kitchen the restaurant rents for each order. When the dish (job) is done, the kitchen is cleaned and dismantled.

## Related Concepts

- [[github-actions|github actions]]
- [[workflow-yaml|workflow yaml]]
- [[cache-dependencies|cache dependencies]]

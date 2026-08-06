---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# cache dependencies

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

`cache-dependencies` stores downloaded packages and build artifacts between CI runs, cutting install times from minutes to seconds. It is one of the highest-impact optimizations for making CI fast and cost-effective.

## 📋 Concrete Example

A GitHub Action uses `actions/cache` with a key based on `requirements.txt` hash. On the next run, if the hash matches, dependencies are restored from cache instantly instead of re-downloaded.

## 🔗 Analogy

`cache-dependencies` is like keeping your tools in a locker at the job site. Instead of driving to the hardware store every morning, you open the locker and start working immediately.

## Related Concepts

- [[github-actions|github actions]]
- [[action-runner|action runner]]
- [[workflow-yaml|workflow yaml]]

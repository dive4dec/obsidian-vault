---
tags: [MLOps]
domain: MLOps
---

# Continuous Integration

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Automatically testing code changes. Every commit triggers tests. Prevents broken code from merging.

## 📋 Concrete Example

CI: developer pushes code. Automatically: unit tests run, integration tests run, model tests run. All pass -> merge. Any fail -> reject. Automated quality gate.

## 🔗 Analogy

A checkpoint on a hiking trail - at each checkpoint, you check your gear and health before continuing. CI checks code at every commit before it merges.

## Related Concepts

- [[ci-cd|CI-CD]]
- [[testing|Testing]]
- [[automation|Automation]]

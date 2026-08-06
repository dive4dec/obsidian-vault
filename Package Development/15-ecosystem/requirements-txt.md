---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# requirements.txt

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

`requirements.txt` lists the packages your project needs. It is the simplest way to communicate dependencies so anyone can recreate your environment with one command.

## 📋 Concrete Example

A `requirements.txt` with `requests==2.31.0` and `click>=8.0` lets a teammate run `pip install -r requirements.txt` and get exactly the right packages installed in seconds.

## 🔗 Analogy

A shopping list taped to the fridge. Anyone heading to the store knows what to buy. Without it, they guess, and you end up with the wrong ingredients for dinner.

## Related Concepts

- [[version-pinning|Version Pinning]]
- [[lock-file|Lock File]]
- [[pip-tools|pip-tools]]

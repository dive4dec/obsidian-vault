---
tags: [Security]
domain: Security
---

# Bandit

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

`bandit` is a static analyzer that scans Python code for common security mistakes. Catching issues like `eval`, weak hashes, or hardcoded passwords early prevents vulnerabilities from shipping.

## 📋 Concrete Example

Run `bandit -r mypackage/` in CI. It flags `subprocess.call(..., shell=True)` with a warning, pointing to the exact file and line so you can fix the risky pattern before merge.

## 🔗 Analogy

A spelling checker underlines mistakes as you type. It does not write your essay, but it catches errors you might miss, making the final draft much cleaner and more professional.

## Related Concepts

- [[safety-audit|safety-audit]]
- [[eval-risk|Eval Risk]]
- [[subprocess-security|Subprocess Security]]

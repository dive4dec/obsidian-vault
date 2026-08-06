---
tags: [Security]
domain: Security
---

# Security MOC

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Security is everyone's responsibility, not just specialists. Understanding common vulnerabilities and the tools that detect them helps you ship packages that protect, not endanger, your users.

## 📋 Concrete Example

A release checklist: run `bandit -r src/`, run `pip-audit`, confirm no secrets in `git log`, and review new dependencies' licenses. This five-minute ritual prevents most common security issues.

## 🔗 Analogy

Locking your doors before leaving home is a habit, not a project. Security checks in your workflow are the same — small, routine actions that keep trouble out.

## Input and Injection

- [[input-validation|Input Validation]]
- [[sql-injection|SQL Injection]]
- [[xss|XSS]]
- [[command-injection|Command Injection]]
- [[path-traversal|Path Traversal]]
- [[pickle-vulnerability|Pickle Vulnerability]]
- [[eval-risk|Eval Risk]]
- [[subprocess-security|Subprocess Security]]

## Secrets and Data

- [[secrets-in-code|Secrets in Code]]
- [[sensitive-data-exposure|Sensitive Data Exposure]]
- [[rate-limiting|Rate Limiting]]
- [[authentication-patterns|Authentication Patterns]]

## Dependency Auditing

- [[dependency-vulnerability|Dependency Vulnerability]]
- [[safety-audit|safety-audit]]
- [[bandit|Bandit]]
- [[pip-audit|pip-audit]]
- [[cve-scanning|CVE Scanning]]
- [[license-compliance|License Compliance]]

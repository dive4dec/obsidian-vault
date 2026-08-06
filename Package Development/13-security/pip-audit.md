---
tags: [Security]
domain: Security
---

# pip-audit

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

`pip-audit` is PyPA's official tool for scanning installed packages against the PyPI vulnerability database. It integrates easily into CI and catches dependency issues automatically.

## 📋 Concrete Example

Run `pip-audit` after `pip install -r requirements.txt`. It reports: `requests 2.20.0 has CVE-2023-XXXX, upgrade to >=2.31.0`. You update the pin, rerun, and the audit is clean.

## 🔗 Analogy

A nutrition label scanner at the supermarket: you scan a product, and it alerts you to recalled batches. You would not buy recalled food, so do not ship recalled dependencies.

## Related Concepts

- [[safety-audit|safety-audit]]
- [[dependency-vulnerability|Dependency Vulnerability]]
- [[cve-scanning|CVE Scanning]]

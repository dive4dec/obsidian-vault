---
tags: [Security]
domain: Security
---

# Safety Audit

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

`safety` is a tool that checks your installed packages against a vulnerability database. Running it in CI catches known issues before they reach production, protecting your users.

## 📋 Concrete Example

Run `safety check` in your pipeline. If `cryptography==3.1` is flagged, the report shows the CVE and fixed version, so you can upgrade and close the security gap before release.

## 🔗 Analogy

A security guard checks IDs against a watchlist at the door. New threats are added to the list regularly, so the guard must check every shift, not just once a year.

## Related Concepts

- [[pip-audit|pip-audit]]
- [[dependency-vulnerability|Dependency Vulnerability]]
- [[bandit|Bandit]]

---
tags: [Security]
domain: Security
---

# Rate Limiting

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Without rate limits, attackers can flood your service with requests, causing denial of service or brute-forcing passwords. Limiting requests per user protects availability and blocks abuse.

## 📋 Concrete Example

A login endpoint allows 5 attempts per minute per IP. After 5 fails, return `429 Too Many Requests`. This stops brute-force password guessing while letting normal users log in fine.

## 🔗 Analogy

A water park limits how many people enter per hour so rides do not get dangerously crowded. Without the limit, a rush of visitors would overwhelm the staff and ruin the experience.

## Related Concepts

- [[authentication-patterns|Authentication Patterns]]
- [[input-validation|Input Validation]]
- [[sensitive-data-exposure|Sensitive Data Exposure]]

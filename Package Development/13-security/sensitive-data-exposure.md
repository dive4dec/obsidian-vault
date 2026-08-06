---
tags: [Security]
domain: Security
---

# Sensitive Data Exposure

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Logging secrets, storing passwords in plain text, or returning too much data in APIs exposes users to harm. Minimizing and encrypting sensitive data is a core security responsibility.

## 📋 Concrete Example

Never `print(user.password)` in logs. Store passwords as hashes using `bcrypt`, and when returning a user object from an API, exclude fields like `password_hash` from the response.

## 🔗 Analogy

A doctor's chart contains private details, but the receptionist only sees your name and appointment time. Exposing the full chart to everyone who calls would violate patient privacy.

## Related Concepts

- [[secrets-in-code|Secrets in Code]]
- [[authentication-patterns|Authentication Patterns]]
- [[input-validation|Input Validation]]

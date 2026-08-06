---
tags: [Security]
domain: Security
---

# Authentication Patterns

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Authentication confirms who a user is. Using proven patterns — hashed passwords, tokens, OAuth — avoids the pitfalls of inventing your own, which is almost always insecure.

## 📋 Concrete Example

Store passwords with `bcrypt.hashpw(password, bcrypt.gensalt())`. Issue signed JWT tokens for sessions. Never store plain-text passwords or invent custom "encryption" schemes.

## 🔗 Analogy

A school ID card with a photo and hologram is hard to forge. A handwritten name tag anyone could make is not. Use established, tested "ID systems" rather than crafting your own.

## Related Concepts

- [[secrets-in-code|Secrets in Code]]
- [[rate-limiting|Rate Limiting]]
- [[sensitive-data-exposure|Sensitive Data Exposure]]

---
tags: [Internet-&-Web]
domain: Internet & Web
---

# Token

> **Domain:** [[_internet-web-moc|Internet & Web]]

## 🎯 Motivation

A piece of data that proves authentication. Sent with each request instead of re-entering passwords.

## 📋 Concrete Example

Token: after login, server gives a JWT token: `eyJhbG...`. Client stores it. Each API request includes the token. Server verifies: is this token valid? Yes -> authenticated. No -> rejected.

## 🔗 Analogy

A token is like a festival wristband - you show your ticket once (login), get a wristband (token). For the rest of the festival, you just show the wristband. No need to show your ticket again. Tokens work the same way.

## Related Concepts

- [[authentication|Authentication]]
- [[jwt|JWT]]
- [[session|Session]]

---
tags: [Internet-&-Web]
domain: Internet & Web
---

# Rate Limiting

> **Domain:** [[_internet-web-moc|Internet & Web]]

## 🎯 Motivation

Restricting how many API requests a user can make per time period. Prevents abuse.

## 📋 Concrete Example

Rate limit: 100 requests per minute per user. User A: 50 requests -> OK. User A: 101st request -> '429 Too Many Requests.' Prevents abuse and ensures fair usage.

## 🔗 Analogy

Rate limiting is like a speed limit on a highway - you can only go 80 km/h, not 200. It prevents dangerous behavior and ensures everyone gets fair use of the road. Rate limiting ensures fair API access.

## Related Concepts

- [[api|API]]
- [[security|Security]]
- [[throttling|Throttling]]

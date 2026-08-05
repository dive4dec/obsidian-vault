---
tags: [Gateway-&-Platforms]
domain: Gateway & Platforms
---

# Connection Pool

> **Domain:** [[_gateway-platforms-moc|Gateway & Platforms]]

## Motivation

The connection pool manages multiple platform connections efficiently, reusing connections instead of making new ones.

## Concrete Example

Hermes keeps 5 Telegram connections in a pool. When a message arrives it uses a free connection instead of opening a new one.

## Analogy

Like a carpool: instead of everyone driving separately, you share rides to save resources.

## Related Concepts

- [[platform-connection|platform connection]]
- [[gateway|gateway]]
- [[platform-adapter|platform adapter]]

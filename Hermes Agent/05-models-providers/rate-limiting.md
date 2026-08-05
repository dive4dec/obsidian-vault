---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Rate Limiting

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

When a provider limits how many requests you can make per minute. Credential pools help avoid this.

## Concrete Example

OpenAI: 50 req/min. At req 51 -> error: rate limit exceeded. Solution: credential pool with 3 keys = 150 req/min. Or switch providers.

## Analogy

A water meter limiting flow - you can only use so much per hour. Rate limiting limits how many API calls you can make.

## Related Concepts

- [[credential-pools|Credential Pools]]
- [[credential-rotation|Credential Rotation]]
- [[provider|Provider]]

---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Credential Rotation

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Automatically switching between API keys in a pool when one becomes exhausted or rate-limited.

## Concrete Example

key1: 50 req/min. At req 51 -> key2. At key2 limit -> key3. When key1 resets -> back to key1. Continuous rotation = no downtime.

## Analogy

Shift workers at a 24-hour restaurant - when one finishes, another takes over. Credential rotation keeps the agent running 24/7.

## Related Concepts

- [[credential-pools|Credential Pools]]
- [[rate-limiting|Rate Limiting]]
- [[provider|Provider]]

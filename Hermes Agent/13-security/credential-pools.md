---
tags: [Security]
domain: Security
---

# Credential Pools

> **Domain:** [[_security-moc|Security]]

## Motivation

Multiple API keys for the same provider. Hermes rotates across them automatically, switching when one is exhausted or rate-limited.

## Concrete Example

Pool: [key1, key2, key3]. key1 hits rate limit -> Hermes switches to key2 automatically. key2 expires -> key3. No interruption. The user never notices.

## Analogy

A fleet of delivery scooters - when one runs out of fuel, the rider switches to another. The delivery continues without delay. Credential pools ensure uninterrupted service.

## Related Concepts

- [[secrets-management|Secrets Management]]
- [[auth-json|Auth JSON]]
- [[provider|Provider]]

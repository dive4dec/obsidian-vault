---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Credential Pools

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Multiple API keys for the same provider. Hermes rotates across them to avoid rate limits.

## Concrete Example

Pool: [key1, key2, key3]. key1 hits rate limit -> switch to key2. key2 expires -> key3. When key1 resets -> switch back. No interruption.

## Analogy

A fleet of delivery scooters - when one runs out of fuel, switch to another. Credential pools ensure uninterrupted service.

## Related Concepts

- [[secrets-management|Secrets Management]]
- [[auth-json|Auth JSON]]
- [[credential-rotation|Credential Rotation]]

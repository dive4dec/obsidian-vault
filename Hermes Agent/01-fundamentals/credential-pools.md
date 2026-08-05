---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Credential Pools

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

If you have multiple API keys for the same provider, Hermes pools them and rotates automatically. If one key runs out of quota, it switches to the next without you noticing.

## Concrete Example

You add three OpenAI keys. Hermes uses the first until it hits the limit, then seamlessly switches to the second.

## Analogy

Like having multiple Octopus cards in your wallet. When one runs out of money, you tap the next one.

## Related Concepts

- [[provider-agnostic|Provider-Agnostic]]
- [[env-file|Env File]]
- [[model-config|Model Config]]

---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Env File

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

The .env file holds your secrets, like API keys and tokens. It is kept separate from the config file so you can share your config without leaking passwords.

## Concrete Example

Your .env file contains a line like OPENROUTER_API_KEY=sk-xxx. Hermes reads it to talk to the model provider.

## Analogy

Like the PIN for your Octopus card. The card is shared, but the PIN stays secret.

## Related Concepts

- [[config-file|Config File]]
- [[credential-pools|Credential Pools]]
- [[model-config|Model Config]]

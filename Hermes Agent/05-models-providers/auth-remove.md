---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Auth Remove

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Remove a provider credential. Command: hermes auth remove PROVIDER.

## Concrete Example

hermes auth remove openai. OpenAI API key is deleted. Hermes can no longer use OpenAI. Remove providers you no longer need.

## Analogy

Taking a key off your keychain - you no longer have access. hermes auth remove deletes a provider credential.

## Related Concepts

- [[hermes-auth|Hermes Auth]]
- [[auth-add|Auth Add]]
- [[auth-list|Auth List]]

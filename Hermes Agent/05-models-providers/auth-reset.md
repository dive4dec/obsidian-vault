---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Auth Reset

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Reset all credentials. Command: hermes auth reset. Removes all API keys and OAuth tokens.

## Concrete Example

hermes auth reset. All credentials deleted. .env and auth.json are cleared. Fresh start. You must re-add all providers.

## Analogy

A factory reset on your keychain - all keys are removed. hermes auth reset clears all credentials for a fresh start.

## Related Concepts

- [[hermes-auth|Hermes Auth]]
- [[auth-remove|Auth Remove]]
- [[auth-list|Auth List]]

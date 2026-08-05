---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Auth Add

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Add a new provider credential. Command: hermes auth add PROVIDER.

## Concrete Example

hermes auth add anthropic --key sk-ant-xxx. Anthropic is now configured. hermes auth add qwen --oauth. Browser login, token saved. Two ways to add.

## Analogy

Adding a new key to your keychain - you get a new key and add it. hermes auth add adds new provider credentials.

## Related Concepts

- [[hermes-auth|Hermes Auth]]
- [[api-key|API Key]]
- [[oauth|OAuth]]

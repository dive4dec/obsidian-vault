---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Hermes Auth

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

The CLI command for managing authentication. Subcommands: add, list, remove, reset.

## Concrete Example

hermes auth add openai --key sk-xxx. hermes auth list: shows all providers. hermes auth remove openai. All auth management in one command.

## Analogy

A keychain - you add, remove, and organize keys. hermes auth manages API keys and OAuth tokens.

## Related Concepts

- [[api-key|API Key]]
- [[oauth|OAuth]]
- [[auth-json|Auth JSON]]

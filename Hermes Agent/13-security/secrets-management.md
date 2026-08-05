---
tags: [Security]
domain: Security
---

# Secrets Management

> **Domain:** [[_security-moc|Security]]

## Motivation

API keys, OAuth tokens, and passwords are stored in .env and auth.json. Hermes manages these securely, never exposing them to the model.

## Concrete Example

.env: OPENROUTER_API_KEY=sk-or-xxx. auth.json: {oauth_tokens: {...}}. Hermes reads these for authentication but redacts them in output. The model never sees raw keys.

## Analogy

A safe in a bank - your valuables (API keys) are locked inside. The bank (Hermes) can access them when needed, but customers (the model) cannot see inside. Secrets management keeps keys safe.

## Related Concepts

- [[secret-redaction|Secret Redaction]]
- [[auth-json|Auth JSON]]
- [[env-file|Env File]]

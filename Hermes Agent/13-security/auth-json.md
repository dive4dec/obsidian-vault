---
tags: [Security]
domain: Security
---

# Auth JSON

> **Domain:** [[_security-moc|Security]]

## Motivation

A file (~/.hermes/auth.json) storing OAuth tokens and credential pool data. Separate from .env which holds API keys.

## Concrete Example

auth.json: {nous: {access_token: xxx, refresh_token: yyy}, openai-codex: {...}}. Hermes reads this for OAuth authentication. Tokens are refreshed automatically.

## Analogy

A wallet with different membership cards - your gym card, library card, student ID. Each card (OAuth token) is for a different service. auth.json holds all your membership cards.

## Related Concepts

- [[secrets-management|Secrets Management]]
- [[credential-pools|Credential Pools]]
- [[oauth|OAuth]]

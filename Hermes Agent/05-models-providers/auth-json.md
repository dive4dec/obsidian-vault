---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Auth JSON

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

A file (~/.hermes/auth.json) storing OAuth tokens and credential pool data. Separate from .env.

## Concrete Example

auth.json: {nous: {access_token: xxx}, qwen: {access_token: yyy}}. Hermes reads this for OAuth. Tokens are refreshed automatically.

## Analogy

A wallet with membership cards - gym, library, student ID. auth.json holds all your OAuth membership cards.

## Related Concepts

- [[secrets-management|Secrets Management]]
- [[oauth|OAuth]]
- [[credential-pools|Credential Pools]]

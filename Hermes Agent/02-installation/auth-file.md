---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# Auth File

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

The auth.json file stores OAuth tokens and credential pool info. It is separate from .env so you can have both API keys (in .env) and OAuth tokens (in auth.json) at the same time.

## Concrete Example

You run hermes auth list and see your Nous Portal token stored in auth.json, plus your OpenAI key from .env.

## Analogy

Like a wallet with two sections: one for cards (OAuth), one for cash (API keys).

## Related Concepts

- [[credential-pools|Credential Pools]]
- [[oauth-login|OAuth Login]]
- [[env-file|Env File]]

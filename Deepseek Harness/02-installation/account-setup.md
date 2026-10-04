---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Account Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Account setup is the alternative to an API key: sign in with a DeepSeek account via a browser login instead of editing keys. `dsh-deepseek-account` reads stored login state, starts or cancels browser login, and resolves account credentials only for the configured inference origin. A developer cares because account mode avoids putting a raw API key in config or env.

## Concrete Example

`dsh-deepseek-account` starts a browser login and stores the grant; model consumers resolve credentials only for the provider-configured origin.

## Analogy

Like logging in once with a browser session instead of re-entering a password every time.

## Related Concepts

- [[api-key-setup|API Key Setup]]
- [[credentials-setup|Credentials Setup]]
- [[env-setup|Environment Setup]]

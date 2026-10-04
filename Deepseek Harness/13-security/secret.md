---
tags: [DSH-Security]
domain: Security & Permissions
---

# Secret

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

A secret is a sensitive value — an API key, OAuth token, or provider credential — that configuration files must not contain. dsh keeps secrets out of configuration by having settings name a credential reference (e.g. `DEEPSEEK_API_KEY`) and resolving the value per request through `dsh-credentials`. The value is stored in the credential file or an environment variable, never in `cordis.yml`, and `describe` never returns it. Empty values are treated as absent.

## Concrete Example

A settings entry `apiKeyEnv: DEEPSEEK_API_KEY` names the reference; the actual `sk-…` value lives in `$DSH_HOME/.credentials.yaml` or the launch environment and is resolved per request.

## Analogy

It is the number on a safe: the door label says "Safe 42" but the combination stays in the owner's head.

## Related Concepts

- [[credentials|Credentials]]
- [[api-key-security|API Key Security]]
- [[data-protection|Data Protection]]

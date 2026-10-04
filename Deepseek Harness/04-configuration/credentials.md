---
tags: [DSH-Configuration]
domain: Configuration
---

# Credentials

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-credentials` keeps secret values out of configuration by letting settings and `cordis.yml` refer to key names such as `DEEPSEEK_API_KEY`, while storing durable per-plugin credential records addressed by `<scope>/<id>`. Resolution is a per-call read, so a rotated key applies to the next request without a restart or configuration edit. The configuration UI can report whether a key or record is set, its source, and whether it is writable — never the value.

## Concrete Example

`credentialRef('DEEPSEEK_API_KEY')` with `ctx.credentials.set(ref, 'sk-…')` stores the key, `describe` reports its status, and `resolve` reads it when a request needs it; records like `llm-pi-ai/openai-codex` hold sign-in grants.

## Analogy

It is a keyring for the harness: config holds key names, the ring holds the keys.

## Related Concepts

- [[credentials-local|Local Credentials]]
- [[api-key-env|API Key Env]]
- [[auth|Authorization]]

---
tags: [DSH-Security]
domain: Security & Permissions
---

# Auth

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Auth in dsh is the authentication layer for the gateway and credential flows. It covers how credentials are obtained (via `dsh-authorization` human-guided flows), stored (via `dsh-credentials` + `dsh-credentials-local`), and resolved per request. The gateway's API surface authenticates the caller before routing requests; the credential store keeps the secret values out of configuration. The anonymous user ID is a separate, non-authenticating identifier used for telemetry correlation.

## Concrete Example

A settings entry `apiKeyEnv: DEEPSEEK_API_KEY` names the credential reference; the gateway resolves it per request and the LLM adapter sends it to the DeepSeek provider.

## Analogy

It is the turnstile at a building entrance: the badge (credential) opens the door, the badge printer (authorization flow) mints the badge, and the log book (credential store) tracks who has which badge.

## Related Concepts

- [[authorization|Authorization]]
- [[credentials|Credentials]]
- [[anonymous-user-id|Anonymous User ID]]

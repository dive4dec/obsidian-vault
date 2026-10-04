---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Settings Controller

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-settings-controller` exposes generated `ctx.remote.settings` and `ctx.remote.credentials` namespaces for browser configuration surfaces. It returns redacted settings and credential metadata, supports settings and credential writes without returning secret values, and opens provider-owned settings or Agent preset locations on the Host desktop. When a provider is absent, the namespace remains registered and returns an actionable configuration error.

## Concrete Example

Writing a setting from the web Settings panel goes through `ctx.remote.settings`; the response never contains the secret value it wrote.

## Analogy

A receptionist who can update your preferences on file but will never read the PIN back to you.

## Related Concepts

- [[api-session|Session Controller]]
- [[api-account|Account Controller]]
- [[gateway|API Gateway]]
- [[theme|Theme]]

---
tags: [DSH-Configuration]
domain: Configuration
---

# Settings Controller

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-api-settings-controller` exposes the generated `ctx.remote.settings` and `ctx.remote.credentials` namespaces for browser configuration surfaces. It returns redacted settings and credential metadata, supports settings and credential writes without ever returning secret values, and can open provider-owned settings or Agent preset locations on the Host desktop. When a provider is absent, the namespace stays registered and returns an actionable configuration error.

## Concrete Example

A settings page calls the `settings` remote to read redacted values and write edits; the `credentials` remote reports whether a key is set, its source, and whether it is writable — never the value itself.

## Analogy

It is the server-side API behind the Settings pages: every read comes back with secrets redacted.

## Related Concepts

- [[settings|Settings]]
- [[credentials|Credentials]]
- [[settings-models|Model Settings]]

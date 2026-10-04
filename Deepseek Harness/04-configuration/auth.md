---
tags: [DSH-Configuration]
domain: Configuration
---

# Authorization

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-authorization` lets a configuration UI or another caller obtain credentials through a human-guided sign-in, code entry, or question. Each attempt sends notices and prompts only to the surface that started it. It reports `authorized` only after the new credential has been stored; a refusal or withdrawal reports `cancelled`, while failures remain errors. It requires the credential store and an integration that defines the available authorization methods.

## Concrete Example

A sign-in flow stores its grant into the credential store as a `<owner>/<id>` record before reporting `authorized`.

## Analogy

It is a concierge for secrets you cannot type into a config file.

## Related Concepts

- [[credentials|Credentials]]
- [[account|DeepSeek Account]]
- [[settings-controller|Settings Controller]]

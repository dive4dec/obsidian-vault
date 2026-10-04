---
tags: [DSH-Configuration]
domain: Configuration
---

# Product Analytics

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-product-analytics` reports selected interactions through the existing OTel product exporter by default, without a user-facing control on Desktop. Ordinary Web clients never submit these events, and missing login identity is omitted. Telemetry is correlated by the anonymous user id per harness home, so it identifies an installation, not a person.

## Concrete Example

Desktop emits product events over OTel; the Web GUI does not, and no login identity is attached when it is absent.

## Analogy

It is an anonymous usage counter tied to the installation, not the user.

## Related Concepts

- [[anonymous-user-id|Anonymous User ID]]
- [[settings-session-log|Session Log Settings]]

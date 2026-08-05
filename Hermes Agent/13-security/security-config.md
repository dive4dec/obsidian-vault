---
tags: [Security]
domain: Security
---

# Security Config

> **Domain:** [[_security-moc|Security]]

## Motivation

The security section of config.yaml: tirith_enabled, redact_secrets, website_blocklist. Controls all security features.

## Concrete Example

config.yaml: security: tirith_enabled: true, redact_secrets: true, website_blocklist: []. All security settings in one section. Changed via hermes config set security.X.

## Analogy

The security control panel in a building - one panel controls alarms, cameras, and door locks. The security config is Hermes control panel for all security features.

## Related Concepts

- [[security-overview|Security Overview]]
- [[tirith|Tirith]]
- [[secret-redaction|Secret Redaction]]

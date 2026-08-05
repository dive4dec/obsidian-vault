---
tags: [Security]
domain: Security
---

# Privacy Settings

> **Domain:** [[_security-moc|Security]]

## Motivation

Configurable privacy controls: PII redaction, website blocklist, secret redaction. Each can be enabled or disabled independently.

## Concrete Example

privacy.redact_pii: true (hash user IDs). security.redact_secrets: true (hide API keys). security.website_blocklist: [sites] (block URLs). Three independent privacy layers.

## Analogy

Three locks on a door - deadbolt (PII), chain (secrets), and keypad (blocklist). Each lock is independent. You can use one, two, or all three. Privacy settings are layered locks.

## Related Concepts

- [[pii-redaction|PII Redaction]]
- [[secret-redaction|Secret Redaction]]
- [[website-blocklist|Website Blocklist]]

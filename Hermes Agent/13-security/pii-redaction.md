---
tags: [Security]
domain: Security
---

# PII Redaction

> **Domain:** [[_security-moc|Security]]

## Motivation

When enabled, the gateway hashes user IDs and strips phone numbers from session context before it reaches the model.

## Concrete Example

On Telegram: user phone +852-9123-4567 is hashed to a1b2c3 before the model sees it. The model cannot read the real phone number. Privacy is protected.

## Analogy

A nickname system - instead of using your real name at school, you use a nickname. Teachers know you by nickname, not real name. PII redaction uses nicknames for private data.

## Related Concepts

- [[secret-redaction|Secret Redaction]]
- [[security-overview|Security Overview]]
- [[gateway|Gateway]]

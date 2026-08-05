---
tags: [Security]
domain: Security
---

# Security Overview

> **Domain:** [[_security-moc|Security]]

## Motivation

Hermes handles sensitive data: API keys, user files, shell commands. Security settings protect against accidental exposure and malicious use.

## Concrete Example

hermes config set security.redact_secrets true. Tool output is scanned for API-key-like strings before entering context. Secrets are replaced with [REDACTED].

## Analogy

A security guard at a building entrance - they check everyone who enters. Even if someone has a key, the guard still verifies it is legitimate. Hermes security settings guard your data.

## Related Concepts

- [[secret-redaction|Secret Redaction]]
- [[approvals|Approvals]]
- [[tirith|Tirith]]

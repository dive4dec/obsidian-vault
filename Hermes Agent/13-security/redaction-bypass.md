---
tags: [Security]
domain: Security
---

# Redaction Bypass

> **Domain:** [[_security-moc|Security]]

## Motivation

Disabling secret redaction for debugging. Only done deliberately, requires config change and restart.

## Concrete Example

hermes config set security.redact_secrets false. Restart Hermes. Now raw API keys appear in output. Use only for debugging redaction itself. Re-enable immediately after.

## Analogy

Taking off safety goggles in a lab - you only do it to check something specific, then put them back on. Redaction bypass is only for debugging.

## Related Concepts

- [[secret-redaction|Secret Redaction]]
- [[security-overview|Security Overview]]
- [[debugging|Debugging]]

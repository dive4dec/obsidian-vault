---
tags: [Security]
domain: Security
---

# Tirith

> **Domain:** [[_security-moc|Security]]

## Motivation

Hermes built-in security scanner that analyzes tool calls and content for potential security issues before execution.

## Concrete Example

Tirith scans: is this command safe? Is this URL suspicious? Is this file access appropriate? If something looks risky, Tirith blocks or warns. Configured via security.tirith_enabled.

## Analogy

A firewall in a building - it checks every door and window for fire risk. If something looks dangerous, it alarms. Tirith is the firewall for Hermes tool calls.

## Related Concepts

- [[security-overview|Security Overview]]
- [[secret-redaction|Secret Redaction]]
- [[approvals|Approvals]]

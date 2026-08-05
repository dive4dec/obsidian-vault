---
tags: [Security]
domain: Security
---

# Tool Isolation

> **Domain:** [[_security-moc|Security]]

## Motivation

Tools operate with limited scope. The terminal tool cannot access .env. The file tool cannot write to system directories. Each tool has boundaries.

## Concrete Example

terminal: cannot cat .env (redacted). file: cannot write to /etc/. browser: cannot access blocklisted sites. Each tool has boundaries that protect the system.

## Analogy

Different keycards in a hotel - your room key opens your room only. It cannot open other rooms or staff areas. Tool isolation gives each tool its own keycard with limited access.

## Related Concepts

- [[security-overview|Security Overview]]
- [[sandbox-security|Sandbox Security]]
- [[toolsets|Toolsets]]

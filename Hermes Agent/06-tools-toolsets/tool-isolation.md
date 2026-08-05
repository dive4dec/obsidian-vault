---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Isolation

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Tools operate with limited scope. The terminal tool cannot access .env. The file tool cannot write to system directories.

## Concrete Example

terminal: cannot cat .env (redacted). file: cannot write to /etc/. Each tool has boundaries that protect the system.

## Analogy

Different keycards in a hotel - your room key opens your room only. Tool isolation gives each tool limited access.

## Related Concepts

- [[toolsets|Toolsets]]
- [[security-overview|Security Overview]]
- [[sandbox-security|Sandbox Security]]

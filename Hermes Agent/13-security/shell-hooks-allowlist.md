---
tags: [Security]
domain: Security
---

# Shell Hooks Allowlist

> **Domain:** [[_security-moc|Security]]

## Motivation

Some shell-hook integrations require explicit allowlisting before they fire. Managed via ~/.hermes/shell-hooks-allowlist.json.

## Concrete Example

A shell hook wants to run git pre-commit. First time: Hermes asks: Allow this hook? You say yes -> added to allowlist. Next time: runs automatically. No prompt.

## Analogy

A guest list at a club - first time you visit, the bouncer checks your ID. Once you are on the list, you walk in freely. The allowlist pre-approves trusted shell hooks.

## Related Concepts

- [[dangerous-command|Dangerous Command]]
- [[approvals|Approvals]]
- [[security-overview|Security Overview]]

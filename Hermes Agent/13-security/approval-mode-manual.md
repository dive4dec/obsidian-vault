---
tags: [Security]
domain: Security
---

# Approval Mode Manual

> **Domain:** [[_security-moc|Security]]

## Motivation

Every potentially destructive command requires explicit user approval. The safest mode. Default.

## Concrete Example

rm -rf build/ -> Approve? (y/n). You must press y for the command to run. Every dangerous command is paused until you approve.

## Analogy

A strict teacher who checks every answer before you submit - even simple ones. Safe but slow. Manual mode checks every risky command.

## Related Concepts

- [[approvals|Approvals]]
- [[approval-mode-smart|Approval Mode Smart]]
- [[approval-mode-off|Approval Mode Off]]

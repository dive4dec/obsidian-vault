---
tags: [Security]
domain: Security
---

# Approval Mode Smart

> **Domain:** [[_security-moc|Security]]

## Motivation

An auxiliary LLM evaluates command risk. Low-risk commands auto-approve; high-risk commands still prompt.

## Concrete Example

ls -la -> auto-approved (safe). rm -rf / -> prompt: This is very dangerous. Approve? Smart mode balances safety and speed.

## Analogy

A smart crossing guard - they wave you through on quiet roads but stop you at busy intersections. Smart approvals let safe commands through and stop dangerous ones.

## Related Concepts

- [[approvals|Approvals]]
- [[approval-mode-manual|Approval Mode Manual]]
- [[auxiliary-model|Auxiliary Model]]

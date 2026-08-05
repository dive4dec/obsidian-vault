---
tags: [Security]
domain: Security
---

# DM Authorization

> **Domain:** [[_security-moc|Security]]

## Motivation

The process of approving a direct message user to interact with Hermes. First message triggers a pairing request.

## Concrete Example

User sends first DM to Hermes. Hermes: Pending pairing request from @user. You run: hermes pairing approve @user. Now @user is authorized. Their messages are processed.

## Analogy

A club membership application - you apply, the manager reviews, and if approved, you get a membership card. DM authorization approves users to join the Hermes club.

## Related Concepts

- [[pairing|Pairing]]
- [[gateway-security|Gateway Security]]
- [[gateway|Gateway]]

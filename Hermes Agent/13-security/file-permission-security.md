---
tags: [Security]
domain: Security
---

# File Permission Security

> **Domain:** [[_security-moc|Security]]

## Motivation

Hermes respects file permissions. Config files (.env, auth.json) are stored with restrictive permissions (0600) to prevent other users from reading them.

## Concrete Example

.env permissions: -rw------- (only owner can read). auth.json: same. Other users on the system cannot read your API keys. File permissions add a layer of security.

## Analogy

A locked diary - only you have the key. No one else can read it. File permissions (0600) lock config files so only you (the owner) can read them.

## Related Concepts

- [[secrets-management|Secrets Management]]
- [[security-overview|Security Overview]]
- [[env-file|Env File]]

---
tags: [Security]
domain: Security
---

# Managed Scope

> **Domain:** [[_security-moc|Security]]

## Motivation

A configuration mode where certain settings are locked and cannot be changed by the user or the agent. Used in enterprise or educational deployments.

## Concrete Example

Managed scope: security.redact_secrets is locked to true. The user cannot disable it. The agent cannot bypass it. Ensures security policies are enforced.

## Analogy

School uniform rules - students cannot change the uniform policy. It is managed by the school. Managed scope locks certain Hermes settings so they cannot be changed.

## Related Concepts

- [[security-overview|Security Overview]]
- [[configuration|Configuration]]
- [[security-config|Security Config]]

---
tags: [Security]
domain: Security
---

# Gateway Security

> **Domain:** [[_security-moc|Security]]

## Motivation

Security considerations specific to the gateway: DM authorization, pairing, platform-specific access control.

## Concrete Example

Gateway: only paired users can send commands. Unpaired messages are ignored. /approve authorizes a pending command. /deny rejects it. The gateway is the security checkpoint for messaging platforms.

## Analogy

A building intercom system - visitors must be buzzed in by a resident. The intercom (gateway) checks identity before opening the door. Gateway security controls who can talk to Hermes.

## Related Concepts

- [[pairing|Pairing]]
- [[dm-authorization|DM Authorization]]
- [[approvals|Approvals]]

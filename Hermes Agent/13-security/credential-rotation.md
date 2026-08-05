---
tags: [Security]
domain: Security
---

# Credential Rotation

> **Domain:** [[_security-moc|Security]]

## Motivation

Automatically switching between API keys in a credential pool when one becomes exhausted or rate-limited.

## Concrete Example

key1: 50 requests/min limit. At request 51 -> switch to key2. At key2 limit -> key3. When key1 resets (next minute) -> switch back. Continuous rotation ensures no downtime.

## Analogy

Shift workers at a 24-hour restaurant - when one worker finishes their shift, another takes over. The restaurant never closes. Credential rotation keeps the agent running 24/7.

## Related Concepts

- [[credential-pools|Credential Pools]]
- [[rate-limiting|Rate Limiting]]
- [[provider|Provider]]

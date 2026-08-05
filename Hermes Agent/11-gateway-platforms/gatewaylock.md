---
tags: [Gateway-&-Platforms]
domain: Gateway & Platforms
---

# gateway.lock

> **Domain:** [[_gateway-platforms-moc|Gateway & Platforms]]

## Motivation

The lock file prevents two gateway instances from running at the same time, avoiding conflicts.

## Concrete Example

When the gateway starts it creates gateway.lock. If another instance tries to start, it sees the lock and stops.

## Analogy

Like a bathroom lock: the next person sees the occupied sign and waits.

## Related Concepts

- [[gateway|gateway]]
- [[hermes-gateway-run|hermes gateway run]]
- [[hermes-gateway-start|hermes gateway start]]

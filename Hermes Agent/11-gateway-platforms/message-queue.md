---
tags: [Gateway-&-Platforms]
domain: Gateway & Platforms
---

# Message Queue

> **Domain:** [[_gateway-platforms-moc|Gateway & Platforms]]

## Motivation

Incoming messages are placed in a queue so they are processed in order, even if many arrive at once.

## Concrete Example

Ten Telegram messages arrive at the same time. The queue processes them one by one in the order received.

## Analogy

Like a cafeteria line: everyone waits their turn to be served.

## Related Concepts

- [[gateway|gateway]]
- [[connection-pool|Connection Pool]]
- [[delivery-options|delivery options]]

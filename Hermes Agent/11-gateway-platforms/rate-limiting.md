---
tags: [Gateway-&-Platforms]
domain: Gateway & Platforms
---

# Rate Limiting

> **Domain:** [[_gateway-platforms-moc|Gateway & Platforms]]

## Motivation

Platforms limit how many messages you can send per second. Hermes respects these limits to avoid being blocked.

## Concrete Example

Telegram allows 30 messages per second. Hermes spaces out messages to stay under the limit.

## Analogy

Like a speed camera on the road: if you go too fast you get a ticket.

## Related Concepts

- [[gateway|gateway]]
- [[message-queue|Message Queue]]
- [[delivery-options|delivery options]]

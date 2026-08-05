---
tags: [Gateway-&-Platforms]
domain: Gateway & Platforms
---

# Message Formatting

> **Domain:** [[_gateway-platforms-moc|Gateway & Platforms]]

## Motivation

Different platforms support different formatting. Hermes adapts its messages to fit each platform.

## Concrete Example

On Telegram Hermes sends Markdown. On SMS it sends plain text since SMS does not support formatting.

## Analogy

Like dressing appropriately: uniform for school, casual clothes for home.

## Related Concepts

- [[platform-adapter|platform adapter]]
- [[gateway|gateway]]
- [[delivery-options|delivery options]]

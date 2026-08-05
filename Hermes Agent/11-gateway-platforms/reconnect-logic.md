---
tags: [Gateway-&-Platforms]
domain: Gateway & Platforms
---

# Reconnect Logic

> **Domain:** [[_gateway-platforms-moc|Gateway & Platforms]]

## Motivation

If a platform connection drops, the gateway automatically tries to reconnect after a short wait.

## Concrete Example

Discord goes offline for 10 seconds. The gateway retries every 5 seconds until Discord is back.

## Analogy

Like calling a friend who did not answer: you try again in a few minutes.

## Related Concepts

- [[gateway|gateway]]
- [[platform-connection|platform connection]]
- [[error-recovery|error recovery]]

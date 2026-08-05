---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Gateway Logs

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Log files for the gateway. Located at ~/.hermes/logs/gateway.log. Contains all gateway events and errors.

## Concrete Example

grep error ~/.hermes/logs/gateway.log. Output: [2025-08-03 14:00] ERROR: Telegram rate limit. [14:05] ERROR: Failed to send message. Logs show what went wrong and when.

## Analogy

A black box in an airplane - it records everything that happens. If there is a problem, investigators read the black box. Gateway logs are the black box for Hermes.

## Related Concepts

- [[troubleshooting|Troubleshooting]]
- [[gateway|Gateway]]
- [[logging|Logging]]

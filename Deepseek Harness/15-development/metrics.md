---
tags: [DSH-Development]
domain: Development & Internals
---

# Metrics

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Metrics in dsh flow through the OTel channels: ordinary-event channels batch by record count with configurable `maxExportBatchSize` and `maxQueueSize`, while Session channels enforce byte limits and serial transport settlement. Delivery is best effort and memory-only — overflow, network failure, and process exit can lose records, with no durable outbox.

## Concrete Example

In `dsh-host-product-telemetry-otel`, a 30-second `scheduledDelayMillis` interval batches product events; the exporter's 15-second retry window runs inside the processor's 20-second batch deadline and the 21-second drain deadline.

## Analogy

It is a speedometer that ships a snapshot every 30 seconds and does not keep a backup if the courier vanishes.

## Related Concepts

- [[otel|OTel]]
- [[telemetry|Telemetry]]
- [[performance|Performance]]

---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Idempotent Jobs

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Idempotent work is safe to re-run, which matters because dsh's automation layers are not exactly-once: the webhook runtime has no deduplication (repeated deliveries may create repeated sessions), and schedule crash recovery can repeat a delivery. Designing the job so a second run is harmless turns retries into a non-event.

## Concrete Example

A job that writes a dated report file keyed by the run date re-runs cleanly, and a webhook rule that checks whether the session already exists before creating one is idempotent across duplicate deliveries.

## Analogy

Stamping a document: the second stamp does not change the first.

## Related Concepts

- [[retry|Retry]]
- [[webhook|Webhook]]
- [[job|Job]]
- [[state|Job State]]

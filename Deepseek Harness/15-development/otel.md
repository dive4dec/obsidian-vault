---
tags: [DSH-Development]
domain: Development & Internals
---

# OTel

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-otel` mounts a single `otel` service that creates independent OTLP reporting channels — ordinary-event and Session-log — each with its own exporter, resource, instrumentation scope, and queue. Mounting alone creates no transport and sends nothing; consumers own authorization, redaction, field selection, and disposal, and no global OTel provider is ever installed.

## Concrete Example

`ctx.otel.createEventReporter(options)` for analytics or `ctx.otel.createSessionLogReporter(options)` for complete Session events; ordinary channels batch by count, Session channels preserve one complete event per record with a 4,000,000 uncompressed request-byte cap.

## Analogy

It is a post office that opens a separate mailbox per sender — nothing leaves until a sender actually drops in a letter.

## Related Concepts

- [[telemetry|Telemetry]]
- [[metrics|Metrics]]
- [[tracing|Tracing]]

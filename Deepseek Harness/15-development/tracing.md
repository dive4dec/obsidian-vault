---
tags: [DSH-Development]
domain: Development & Internals
---

# Tracing

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Tracing in dsh rides the same OTel infrastructure: each channel carries its own instrumentation scope and resource attributes supplied by the consumer, so transport sharing never changes event attribution. Session-log channels preserve one complete event per record with `eventName: "session-log"` and `sessionId`, letting a Session's events be reconstructed end to end.

## Concrete Example

`createSessionLogReporter(options)` supplies endpoint, scope, resource attributes, queue settings, and a diagnostic callback; scope names and versions come from each consumer so shared transport does not mix identities.

## Analogy

It is a numbered wristband on every Session's events so the collector can stitch the journey back together.

## Related Concepts

- [[otel|OTel]]
- [[metrics|Metrics]]
- [[telemetry|Telemetry]]

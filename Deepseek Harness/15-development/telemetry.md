---
tags: [DSH-Development]
domain: Development & Internals
---

# Telemetry

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-host-product-telemetry-otel` sends explicitly selected product usage events to an OTLP/HTTP collector; mounting the plugin collects nothing automatically — applications call `emit()` on the injected `productTelemetry` service with fields they selected. The Desktop composition mounts it when product analytics is enabled; ordinary Web does not.

## Concrete Example

Config keys include `endpoint` (default `https://dsh-otel-collector.deepseeksvc.com/v1/logs`), `serviceName`, `serviceVersion` from `DSH_APP_VERSION`, `compression: gzip`, `maxExportBatchSize: 512`, `maxQueueSize: 2048`, and `shutdownTimeoutMillis: 21000`.

## Analogy

It is a dashboard gauge that only reports what the application explicitly hands it.

## Related Concepts

- [[otel|OTel]]
- [[metrics|Metrics]]
- [[logs|Logs]]

---
tags: [DSH-Development]
domain: Development & Internals
---

# Logs

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

dsh keeps operation-scoped diagnostic logs next to the operation: plugin manager pnpm runs write to the profile's `.plugin-manager/logs` directory, and each operation records the run it starts in `.plugin-manager/run.json` and removes the record when the run ends. Service operations return bounded output (`outputBytes` defaults to 16,384) with the full output retained in the returned log path.

## Concrete Example

A cancelled install reports `application: 'cancelled'` only after pnpm exited and the profile files were restored; the pnpm and Loader diagnostics remain unmodified in the diagnostic log under `.plugin-manager/logs`.

## Analogy

It is a flight recorder that writes one segment per operation and keeps the full recording on disk.

## Related Concepts

- [[debugging|Debugging]]
- [[telemetry|Telemetry]]
- [[internals-debug|Debug Internals]]

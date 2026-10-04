---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Telemetry

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-telemetry` lets deployments send ordered copies of session activity for reporting while preserving the canonical session log. Deployments choose one reporting backend and can redact each outbound copy before delivery; without redaction rules, captured data leaves the process unchanged. The handoff is non-blocking and best effort, so reporting never delays session processing.

## Concrete Example

Implement the three-member backend contract and compose it with the coordinator plus a capture mode; queued records may be lost if the process crashes.

## Analogy

A live TV feed that mirrors the event without interfering with it.

## Related Concepts

- [[session-log|Session Log]]
- [[session|Session]]

---
tags: [DSH-Development]
domain: Development & Internals
---

# Performance

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Performance in dsh is managed with explicit deadlines rather than unbounded waits: `lockWaitMs` (120,000 ms) for the profile write lock, `inspectTimeoutMs` (20,000 ms) for one registry lookup, `githubConnectionTimeoutMs` (5,000 ms) for the pre-install repository check, and HMR's 100 ms debounce for combining module changes.

## Concrete Example

`runExclusive()` serializes HMR configuration changes so a burst of edits costs one reconciled pass, and the 21-second OTel drain deadline caps how long an unreachable collector can delay disposal.

## Analogy

It is a kitchen where every station has a timer so one stuck pot never blocks the whole pass.

## Related Concepts

- [[profiling|Profiling]]
- [[metrics|Metrics]]
- [[hmr|HMR]]

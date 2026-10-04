---
tags: [DSH-Development]
domain: Development & Internals
---

# Profiling

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Profiling dsh focuses on the paths that actually wait: pnpm subprocess runs bounded by `idleTimeoutMs` and `lockWaitMs`, OTel export deadlines (`timeoutMillis`, `exportTimeoutMillis`, `shutdownTimeoutMillis`), and the HMR debounce window that combines file events. These bounds are what keep one operation from holding the profile write lock indefinitely.

## Concrete Example

A service pnpm run that captures no output for `idleTimeoutMs` (default 600,000 ms) is terminated, reported as `timedOut` alongside its exit status, and not retried on the next registry — bounding how long one operation can hold the profile lock.

## Analogy

It is watching which lane of the checkout line takes forever and capping its patience.

## Related Concepts

- [[performance|Performance]]
- [[metrics|Metrics]]
- [[debugging|Debugging]]

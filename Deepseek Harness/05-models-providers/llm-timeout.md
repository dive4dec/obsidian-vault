---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Timeout

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

An LLM timeout bounds how long a model call may take. `dsh-timeout` provides shared `deadline` and `idleWatchdog` helpers that clamp a caller hint, arm a deadline, and distinguish local timeout from upstream cancellation. The DeepSeek adapter's `streamIdleTimeoutMs` (default 300,000 ms) is the maximum provider idle time per outstanding stream read, and a stream-idle expiry throws `TIMEOUT`.

## Concrete Example

`clampTimeout(requested, DEFAULT_TIMEOUT_MS, MAX_TIMEOUT_MS, '...')` fills a missing hint and caps it; the DeepSeek route's `streamIdleTimeoutMs: 300000` ends a stalled read with a `TIMEOUT` failure.

## Analogy

An alarm clock that stops a call if the provider goes silent too long.

## Related Concepts

- [[streaming|Streaming]]
- [[model-error|Model Error]]
- [[llm-retry|LLM Retry]]
- [[rate-limit|Rate Limit]]


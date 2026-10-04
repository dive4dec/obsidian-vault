---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Logging

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Model logging is recording model requests and responses for debugging. The session log keeps the full model-visible input and embedded assistant stream so a retried request is reconstructable exactly like the original; the DeepSeek adapter's default-on `dsh_session_log` request-extension field carries incremental session-log data outside model input.

## Concrete Example

`dsh-session-log-deepseek` contributes the `dsh_session_log` top-level field, and an `llm/retry` event records the scheduled retry so the log reconstructs every attempt.

## Analogy

A black-box flight recorder that captures each request and response for later replay.

## Related Concepts

- [[llm-api-extensions|DeepSeek API Extensions]]
- [[llm-observability|LLM Observability]]
- [[usage-tracking|Usage Tracking]]
- [[llm-retry|LLM Retry]]


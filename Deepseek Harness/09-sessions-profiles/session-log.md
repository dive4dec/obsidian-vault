---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Log

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-log-deepseek` incrementally uploads the canonical session log so official DeepSeek LLM API requests carry the `dsh_session_log` request field. It owns the durable `session-log-deepseek/delivery-accepted` event, from which it derives the acceptance watermark for retry. Disable it only when the official API must not receive a session-log suffix.

## Concrete Example

The function plugin injects `ctx.sessions` and `ctx.deepseekLlmApiExtensions`; `enabled: true` (default) sends the contribution, and changes apply from the next request.

## Analogy

Appending the transcript to the envelope each time a letter is sent.

## Related Concepts

- [[session-reference|Session Reference]]
- [[session-telemetry|Session Telemetry]]
- [[session|Session]]

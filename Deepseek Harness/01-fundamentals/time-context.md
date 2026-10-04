---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Time Context

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-time-context` injects the current time into the agent's context: on eligible steps it appends a durable, source-attributed reading with a timestamp in the request's browser zone, the browser-zone policy, and elapsed time since the preceding model-visible message. This helps the model interpret otherwise-unqualified dates and times, and tells it to ask when current-turn browser zones are mixed or missing. Readings default to a 10-minute minimum interval (`refreshIntervalMs`), and `0` injects at every eligible step.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-time-context'
  config:
    timeZone: Asia/Shanghai
```

## Analogy

It is a clock on the wall of the control room: the operator glances at it instead of guessing the time.

## Related Concepts

- [[context|Context]]
- [[system-prompt|System Prompt]]

---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Timeout

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-timeout` provides the shared timeout arithmetic that bounds operations so the agent never hangs. `clampTimeout` fills a missing hint from a backend default and caps it at the allowed maximum; `deadline` fuses the chosen timeout with upstream cancellation into one `AbortSignal`; and `idleWatchdog` counts only time spent waiting for provider reads, so consumer think time between reads never counts as idle. The signal only notifies — the caller still owns killing its process, socket, or task.

## Concrete Example

```ts
using d = deadline(upstream, timeoutMs, 'BASH_TIMEOUT')
const outcome = await runWork({ signal: d.signal })
```

## Analogy

It is a kitchen timer that can also be silenced by the chef — it dings or the chef stops, whichever comes first.

## Related Concepts

- [[tool-calling|Tool Calling]]
- [[agent-loop|Agent Loop]]

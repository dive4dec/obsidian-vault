---
tags: [DSH-Development]
domain: Development & Internals
---

# Native Command

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-native-command` runs host executables without a shell and opens Host filesystem paths through the desktop. The runner wraps Node's `execFile` with captured utf8 output, cancellation via `AbortSignal`, and an explicit `window: 'hidden' | 'visible'` startup-visibility argument for Windows; the path opener supports default-application, text-editor, and reveal intents plus WSL translation. It is a stateless library — no `ctx`, no events.

## Concrete Example

`await runNativeCommand('osascript', ['-e', script], signal, 'hidden')`; on any failure it rejects with the exit `code` and both captured streams, distinguishing a missing tool (`ENOENT`) from a cancellation (`ABORT_ERR`) from a real command failure.

## Analogy

It is the harness's direct line to the operating system, deliberately refusing to go through a shell interpreter.

## Related Concepts

- [[internals|Internals]]
- [[debugging|Debugging]]
- [[internals-debug|Debug Internals]]

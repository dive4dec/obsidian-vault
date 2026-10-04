---
tags: [DSH-Development]
domain: Development & Internals
---

# Speech-to-Text (Exp)

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-experimental-speech-to-text` is the Service Definition that selects named speech recognizers through `ctx.speechToText`; consumers resolve their request before execution and providers register independently. `defaultProvider` is required and selects an exact registered id, with no fallback that silently picks another recognizer; the `./wave` helper validates canonical 16 kHz mono PCM16 WAV input.

## Concrete Example

`resolve()` captures the provider instance, recording, and language; `transcribe()` rejects a withdrawn or replaced registration, and a registration disposer closes admission and aborts accepted requests. The provider package is `@deepseek-ai/dsh-experimental-speech-to-text-sensevoice`.

## Analogy

It is a named-registry for dictation engines where the caller must name exactly which one to use.

## Related Concepts

- [[voice-input|Voice Input (Exp)]]
- [[experimental|Experimental]]
- [[telemetry|Telemetry]]

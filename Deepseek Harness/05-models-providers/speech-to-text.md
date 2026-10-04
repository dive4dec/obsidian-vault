---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Speech-to-Text

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-experimental-speech-to-text` is the experimental service definition that selects named speech recognizers through `ctx.speechToText`. A `defaultProvider` is required and selects an exact registered id; the voice-input bundle supplies `sensevoice-local`. Consumers resolve their request before execution, and a missing or duplicate provider fails explicitly.

## Concrete Example

`defaultProvider: sensevoice-local` selects the local recognizer; `resolve()` captures the provider instance and `transcribe()` rejects a withdrawn or replaced registration.

## Analogy

A microphone-to-text dictation service with a pluggable recognizer engine.

## Related Concepts

- [[sensevoice|SenseVoice]]
- [[voice-input|Voice Input]]
- [[llm-extensions|LLM Extensions]]
- [[model-selection|Model Selection]]


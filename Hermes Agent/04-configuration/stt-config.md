---
tags: [Configuration]
domain: Configuration
---

# STT Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The stt section: provider, model, language. Controls speech-to-text.

## Concrete Example

stt: provider: faster_whisper, model: base, language: en. When you send a voice message, faster_whisper transcribes it. The stt config picks the transcriber.

## Analogy

A subtitle settings on a video - you pick the language and style. STT config picks how voice messages are transcribed.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[stt|STT]]

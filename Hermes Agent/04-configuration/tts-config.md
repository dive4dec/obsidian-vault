---
tags: [Configuration]
domain: Configuration
---

# TTS Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The tts section: provider, voice, speed. Controls text-to-speech.

## Concrete Example

tts: provider: edge, voice: en-US-JennyNeural, speed: 1.0. Hermes replies are spoken in Jennie voice. The tts config picks the narrator.

## Analogy

An audiobook settings - you pick the narrator voice and speed. TTS config picks how Hermes responses are spoken.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[tts|TTS]]

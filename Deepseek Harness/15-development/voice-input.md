---
tags: [DSH-Development]
domain: Development & Internals
---

# Voice Input (Exp)

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-experimental-voice-input-bundle` composes a speech Service Definition, the local SenseVoice provider, authenticated Remote, and browser microphone control into one optional bundle that shipped profiles leave disabled. Its static `cordis.patch.yml` adds the four voice rows and selects `sensevoice-local` as the default recognizer.

## Concrete Example

Enable Voice Input from the Web sidebar's Plugins page (blue waveform icon), then Download and prepare the model, and click the microphone between the model selector and Send to insert a transcript; disabling the bundle cancels active work but keeps cached assets on disk.

## Analogy

It is a plug-in dictation bar for the Web composer, with the model weights fetched on demand.

## Related Concepts

- [[speech-to-text|Speech-to-Text (Exp)]]
- [[experimental|Experimental]]
- [[plugin-manager|Plugin Manager]]

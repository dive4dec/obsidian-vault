---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# SenseVoice

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-experimental-speech-to-text-sensevoice` is the local SenseVoice provider: it recognizes speech with SenseVoiceSmall ONNX and Silero VAD on the host CPU, needing no Python, compiler, or model conversion. Preparation downloads revision-pinned, size- and SHA-256-verified model files, and `precision` defaults to `int8` (with `fp32` for the larger reference weights).

## Concrete Example

The voice bundle supplies an absolute `dataRoot` under the DSH home and selects `sensevoice-local` as the default recognizer; the platform-specific sherpa-onnx Node package includes ONNX Runtime.

## Analogy

A local transcription engine that runs on your own CPU with no cloud round-trip.

## Related Concepts

- [[speech-to-text|Speech-to-Text]]
- [[voice-input|Voice Input]]
- [[llm-extensions|LLM Extensions]]
- [[model-compatibility|Model Compatibility]]


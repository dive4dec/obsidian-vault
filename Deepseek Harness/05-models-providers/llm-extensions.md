---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Extensions

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

LLM extensions are pluggable capabilities bolted onto the model path without changing the base adapter. The DeepSeek API-extensions registry lets a contributor plugin add one validated top-level request field, while speech-to-text and other experimental capabilities register as separate service definitions. Extensions stay outside model input and are lifecycle-owned.

## Concrete Example

`DeepSeekLlmApiExtensionRegistry.register(field, provider)` reserves one field; `dsh-session-log-deepseek` and `dsh-plugin-package-inventory-deepseek` are the shipped contributors.

## Analogy

Optional add-on modules you snap onto a base unit without rebuilding it.

## Related Concepts

- [[llm-api-extensions|DeepSeek API Extensions]]
- [[speech-to-text|Speech-to-Text]]
- [[provider-registry|Provider Registry]]
- [[model-logging|Model Logging]]


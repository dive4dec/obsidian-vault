---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Health Check

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

A model health check probes that a provider endpoint and model are reachable and usable. The pi-ai adapter can interrogate an endpoint for the models it serves (candidates carry optional `inputModalities`), and discovery does not probe inference endpoints for the DeepSeek route — a misdeclared modality is refused by the provider after prompt admission.

## Concrete Example

`openai-completions` discovery uses `GET {baseURL}/models` with bearer auth, while `anthropic-messages` uses native `GET /v1/models?limit=1000` with `x-api-key`.

## Analogy

A status light that blinks green when the server answers and lists what it can serve.

## Related Concepts

- [[api-base-url|API Base URL]]
- [[provider-errors|Provider Errors]]
- [[model-compatibility|Model Compatibility]]
- [[proxy-for-llm|LLM Proxy]]


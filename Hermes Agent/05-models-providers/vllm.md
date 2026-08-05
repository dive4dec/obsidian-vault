---
tags: [Models-&-Providers]
domain: Models & Providers
---

# vLLM

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

A high-throughput LLM serving engine. Runs models locally with optimized inference.

## Concrete Example

vLLM: python -m vllm.entrypoints.openai.api_server --model llama-3.3-70b. High throughput, OpenAI-compatible API. Hermes connects via base_url.

## Analogy

An espresso machine for a cafe - high volume, fast, professional. vLLM is for serving models to many users at high speed.

## Related Concepts

- [[local-model|Local Model]]
- [[provider|Provider]]
- [[models-providers|Models & Providers]]

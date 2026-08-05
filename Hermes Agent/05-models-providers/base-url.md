---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Base URL

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

The API endpoint URL for a provider. Configured when adding a custom provider.

## Concrete Example

hermes model add local --base-url http://localhost:8080/v1. Hermes sends API calls to this URL. Used for local models (vLLM, Ollama) or custom endpoints.

## Analogy

A street address - you need to know where to go. The base URL is the address of the LLM server.

## Related Concepts

- [[custom-endpoint|Custom Endpoint]]
- [[provider|Provider]]
- [[hermes-model|Hermes Model]]

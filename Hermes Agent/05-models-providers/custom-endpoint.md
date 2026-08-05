---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Custom Endpoint

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Any OpenAI-compatible API endpoint. Hermes can connect to any server that speaks the OpenAI API format.

## Concrete Example

hermes model add my-model --base-url https://my-server.com/v1 --key xxx. Now my-model is available. Hermes works with any compatible server.

## Analogy

A universal charger - it works with any phone that has a USB port. Hermes works with any server that has an OpenAI-compatible API.

## Related Concepts

- [[provider|Provider]]
- [[base-url|Base URL]]
- [[hermes-model|Hermes Model]]

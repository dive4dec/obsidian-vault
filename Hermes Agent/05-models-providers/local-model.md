---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Local Model

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Running an LLM on your own machine. No API costs. Examples: Ollama, vLLM, llama.cpp.

## Concrete Example

hermes model add local --base-url http://localhost:11434/v1. Ollama running Llama 3.3. No internet needed. Free. Your data never leaves your machine.

## Analogy

Cooking at home vs eating out - free but you do the work. Local models are free but use your computer resources.

## Related Concepts

- [[custom-endpoint|Custom Endpoint]]
- [[base-url|Base URL]]
- [[provider|Provider]]

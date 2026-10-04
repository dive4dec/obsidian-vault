---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Compatibility

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Model compatibility is which capabilities a model supports — tools, reasoning, streaming, images, and system-prompt update mode. The exact-model metadata exposes `reasoningEfforts`, input modalities, and `systemPromptUpdate`; the LLM service resolves these via `ctx.llm.resolveModelInfo()` and validates a request's call config against the exact model before any provider I/O.

## Concrete Example

`deepseek-flash` is text- and image-capable with `in-history` system updates, while `deepseek-v4-pro` is text-only; a request is checked against the exact model before dispatch.

## Analogy

The spec sheet listing which features a given car model actually has.

## Related Concepts

- [[tool-support|Model Tool Support]]
- [[reasoning-model|Reasoning Model]]
- [[model-id|Model ID]]
- [[context-window|Context Window]]


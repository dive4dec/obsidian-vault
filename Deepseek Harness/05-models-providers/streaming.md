---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Streaming

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Streaming is how dsh delivers a model response as token-level `StreamChunk`s rather than one blob. Each `ctx.llm.stream()` call yields `block-start`, `text-delta`, `usage`, and a terminal `finish` chunk; `BlockAssembler` turns chunks into content blocks. Every stream always ends in exactly one terminal result — success, error, or aborted.

## Concrete Example

`for await (const chunk of ctx.llm.stream({ provider: 'deepseek-official', model: 'deepseek-flash', messages }))` yields token deltas that `BlockAssembler` assembles into blocks.

## Analogy

A live transcription — the words appear one at a time as the speaker talks.

## Related Concepts

- [[llm|LLM Layer]]
- [[max-tokens|Max Tokens]]
- [[model-error|Model Error]]
- [[llm-timeout|LLM Timeout]]


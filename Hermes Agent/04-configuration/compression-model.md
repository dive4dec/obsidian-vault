---
tags: [Configuration]
domain: Configuration
---

# Compression Model

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

An auxiliary model used for context compression. Summarizes old messages to free context space.

## Concrete Example

model.compression: openrouter/deepseek/deepseek-v3. At compression threshold, this model summarizes 80K tokens of history into 20K. Fast and cheap.

## Analogy

A note-taker in a meeting - they summarize the 2-hour discussion into 1 page. The compression model summarizes old context into a brief summary.

## Related Concepts

- [[auxiliary-models|Auxiliary Models]]
- [[model-config|Model Config]]
- [[context-compression|Context Compression]]

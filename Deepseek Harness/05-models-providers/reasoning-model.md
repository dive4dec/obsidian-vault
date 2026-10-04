---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Reasoning Model

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

A reasoning model emits thinking/reasoning content alongside its answer, controlled by the DeepSeek `reasoningEffort` levels: `off`, `low`, `high`, or `max`. `low`, `high`, and `max` enable thinking and serialize as `output_config.effort`; adapter-owned `off` sends `thinking.type: disabled`. Reasoning history is passed back verbatim into later requests.

## Concrete Example

`config: { reasoningEffort: high }` on the DeepSeek route; an unsupported value fails with `UNSUPPORTED_REASONING_EFFORT` before network I/O, and `session-title` requests force thinking off.

## Analogy

A model that shows its work before writing the final answer.

## Related Concepts

- [[model-config|Model Config]]
- [[temperature|Temperature]]
- [[streaming|Streaming]]
- [[model-compatibility|Model Compatibility]]


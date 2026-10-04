---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Tool Support

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Model tool support is whether a model can request tools. On the DeepSeek Messages route, tool calls and results travel as content blocks and tool arguments are sent as raw JSON strings; `GenerateOptions.tools` carries active definitions while `toolHistory` supplies prior declarations. The core vocabulary does not map `tool_choice`.

## Concrete Example

Messages sends tool calls and tool results as content blocks; malformed historical tool arguments become `{}` while new ones must be valid JSON objects.

## Analogy

Whether the model can press the buttons on the console, or only talk.

## Related Concepts

- [[llm|LLM Layer]]
- [[model-compatibility|Model Compatibility]]
- [[streaming|Streaming]]
- [[response-format|Response Format]]


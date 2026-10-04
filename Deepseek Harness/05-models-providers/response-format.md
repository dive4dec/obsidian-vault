---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Response Format

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Response format is how the model's output is shaped — free-form text, reasoning blocks, and tool calls. On the DeepSeek Messages route, reasoning, text, and raw-string tool arguments are translated into harness chunks; `GenerateOptions` sampling is limited to `temperature`, `maxTokens`, and `stop`, with no `tool_choice` or structured-output field in the core vocabulary.

## Concrete Example

Messages returns reasoning, text, and raw-JSON-string tool-call arguments as stream chunks; tool arguments must be valid JSON objects when newly generated.

## Analogy

Choosing whether the answer is a paragraph, a numbered list, or a form to fill in.

## Related Concepts

- [[streaming|Streaming]]
- [[tool-support|Model Tool Support]]
- [[temperature|Temperature]]
- [[reasoning-model|Reasoning Model]]


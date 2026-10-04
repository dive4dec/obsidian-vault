---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Model

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A model is the LLM an agent uses, selected per agent via `provider` and `model` in the `dsh-agent-loop` config (both are required before dispatch). The model route is provider-neutral through `dsh-llm`, with DeepSeek as the shipped provider; capacity and call defaults resolve through `ctx.llm.resolveModelInfo()`. Developers care because changing the model route changes reasoning effort, output-token caps, and which tools or prompt updates the route supports.

## Concrete Example

```yaml
- id: 'main'
  provider: deepseek
  model: deepseek-chat
  reasoningEffort: high
```

## Analogy

It is the engine under the hood — the same car body can run on different engines with different outputs.

## Related Concepts

- [[agent|Agent]]
- [[agent-loop|Agent Loop]]
- [[token-meter|Token Meter]]

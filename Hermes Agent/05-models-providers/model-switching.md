---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Model Switching

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Changing the active model mid-session. Command: /model PROVIDER/MODEL.

## Concrete Example

/model openai/gpt-4o. Hermes switches to GPT-4o. Next message uses GPT-4o. Switch back: /model anthropic/claude-sonnet-4. Flexible.

## Analogy

Changing channels on a TV - you switch to a different channel. /model switches to a different LLM mid-conversation.

## Related Concepts

- [[hermes-model|Hermes Model]]
- [[provider-selection|Provider Selection]]
- [[models-providers|Models & Providers]]

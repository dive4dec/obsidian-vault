---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Provider Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --provider flag forces a specific provider (openrouter, anthropic, nous, etc.) for this session. It is used together with --model when you want exact control.

## Concrete Example

You run hermes chat --provider openai -m gpt-4o. This session uses OpenAI GPT-4o, regardless of your default.

## Analogy

Like choosing a specific courier company for one delivery, instead of your usual.

## Related Concepts

- [[model-flag|Model Flag]]
- [[provider-agnostic|Provider-Agnostic]]
- [[model-config|Model Config]]

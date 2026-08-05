---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Prompt Caching

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Caching the system prompt and tool schemas to reduce API costs and latency. Changes mid-conversation break caching.

## Concrete Example

Session start: system prompt (5000 tokens) is cached. Each turn: only new messages are sent. 90% cost reduction. But if tools or system prompt change, cache is invalidated.

## Analogy

A restaurant that pre-sets tables - they set up plates, cups, and utensils once. Each new customer just gets food. No need to re-set the table. Prompt caching pre-sets the system prompt.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[toolsets|Toolsets]]
- [[system-prompt|System Prompt]]

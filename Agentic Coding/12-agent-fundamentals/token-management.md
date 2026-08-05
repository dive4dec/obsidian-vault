---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Token Management

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

Agents consume tokens with every LLM call. Managing tokens - using smaller context, compressing history, choosing efficient models - controls cost.

## 📋 Concrete Example

Management: summarize old conversation (reduces context tokens), use a cheaper model for simple steps (reduces cost per token), limit tool output length (reduces input tokens).

## 🔗 Analogy

Managing water usage - turn off the tap while brushing teeth, use a low-flow showerhead, fix leaks. Same cleanliness, less water. Token management achieves the same result with fewer tokens.

## Related Concepts

- [[efficiency|Efficiency]]
- [[cost-optimization|Cost Optimization]]
- [[context-window|Context Window]]

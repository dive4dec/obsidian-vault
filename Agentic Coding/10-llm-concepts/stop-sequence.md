---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Stop Sequence

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

A stop sequence tells the model when to stop generating. Without it, the model might ramble on past the intended end.

## 📋 Concrete Example

Set stop=['\n\n'] - the model stops when it sees a double newline. Set stop=[`END`] - it stops at `END`. Useful for structured outputs where you want precise control.

## 🔗 Analogy

A stop sign at the end of a road - it tells the driver exactly where to stop. Without it, they might keep driving past the destination. The stop sequence tells the model where to halt.

## Related Concepts

- [[inference|Inference]]
- [[generation|Generation]]
- [[max-tokens|Max Tokens]]

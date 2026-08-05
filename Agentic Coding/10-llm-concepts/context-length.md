---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Context Length

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The maximum number of tokens the model can process in a single request (input + output). Larger context enables longer documents but costs more.

## 📋 Concrete Example

A 128K context model can process a 300-page book in one prompt. A 4K context model can only handle about 10 pages. Cost scales with tokens used, so long contexts are expensive.

## 🔗 Analogy

The size of a whiteboard - a small whiteboard (short context) fits a few equations. A wall-sized whiteboard (long context) fits an entire lesson plan. Bigger is more capable but costs more (more `markers` used).

## Related Concepts

- [[context-window|Context Window]]
- [[token|Token]]
- [[max-tokens|Max Tokens]]
- [[cost|Cost]]

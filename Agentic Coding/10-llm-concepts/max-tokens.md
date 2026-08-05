---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Max Tokens

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

A parameter that limits how many tokens the model can generate. Prevents runaway generation and controls cost.

## 📋 Concrete Example

Setting max_tokens=100 means the model generates at most 100 tokens (about 75 words). If the answer needs 200 tokens, it gets cut off. Choose wisely based on the task.

## 🔗 Analogy

A word limit on an essay - 'maximum 500 words'. The student must fit their answer within that limit. Max_tokens does the same for the model, capping output length.

## Related Concepts

- [[token|Token]]
- [[inference|Inference]]
- [[stop-sequence|Stop Sequence]]

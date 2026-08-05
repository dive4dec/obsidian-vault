---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# In-Context Learning

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The model learns from information provided in the prompt itself - examples, instructions, context - without updating its weights. It's temporary, just for this conversation.

## 📋 Concrete Example

Give the model 3 examples of translation, then ask it to translate a new sentence. It `learned` the pattern from the examples in context - but this learning vanishes when the conversation ends.

## 🔗 Analogy

Learning rules for a board game by watching one round - you understand how to play from watching (in-context), but you haven't memorized the rulebook (no weight update). Next game, you need to watch again.

## Related Concepts

- [[few-shot-learning|Few-Shot Learning]]
- [[zero-shot-learning|Zero-Shot Learning]]
- [[context-window|Context Window]]

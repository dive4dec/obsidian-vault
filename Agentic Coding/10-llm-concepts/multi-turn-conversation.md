---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Multi-Turn Conversation

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

A conversation with multiple back-and-forth exchanges. Each turn depends on previous turns, requiring the model to track context.

## 📋 Concrete Example

Turn 1: User asks about Python lists. Turn 2: Follow-up about dictionaries. Turn 3: 'How do they differ?' The model must remember turns 1-2 to answer turn 3.

## 🔗 Analogy

A tennis rally - each shot (turn) depends on the previous one. You can't play a shot without knowing where the ball came from. Multi-turn conversations are rallies of questions and answers.

## Related Concepts

- [[conversation-history|Conversation History]]
- [[context-window|Context Window]]
- [[chat-model|Chat Model]]

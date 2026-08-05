---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# ReAct Prompting

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Reasoning + Acting: the model alternates between thinking (reasoning) and taking actions (calling tools, searching) to solve complex tasks.

## 📋 Concrete Example

Thought: 'I need to know the weather.' Action: search_weather('Hong Kong'). Observation: '28C, sunny.' Thought: 'Now I can recommend outdoor activities.' Action: generate_response().

## 🔗 Analogy

A detective solving a case - they think (reasoning), then act (interview a witness), then think again based on what they learned. ReAct makes the LLM alternate between thinking and acting.

## Related Concepts

- [[reasoning|Reasoning]]
- [[tool-use|Tool Use]]
- [[chain-of-thought|Chain of Thought]]
- [[action-observation|Action-Observation]]

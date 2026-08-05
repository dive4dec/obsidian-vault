---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Conversation History

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The model needs to see previous messages to maintain context. The conversation history is the list of all prior messages sent in the chat.

## 📋 Concrete Example

Messages: [user: `Hi`, assistant: 'Hello!', user: 'What is 2+2?', assistant: '4', user: 'And 3+3?']. The model sees all of this to understand `And` refers to addition.

## 🔗 Analogy

A chat log on your phone - you scroll up to see what was said before. The model does the same: it reads the full conversation history to understand context and references.

## Related Concepts

- [[context-window|Context Window]]
- [[chat-template|Chat Template]]
- [[multi-turn-conversation|Multi-Turn Conversation]]

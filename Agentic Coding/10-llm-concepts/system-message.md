---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# System Message

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The system message is the technical term for the system prompt in the API. It's the first message in the conversation, setting the model's behavior.

## 📋 Concrete Example

In the API: messages=[{`role`: `system`, `content`: 'You are a tutor'}, {`role`: `user`, `content`: 'Help me'}]. The system message is the first dict with role=`system`.

## 🔗 Analogy

The rules of a game explained before playing - before the game starts, everyone agrees on rules (system message). Then the game (conversation) proceeds within those rules.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[chat-template|Chat Template]]
- [[role-prompting|Role Prompting]]

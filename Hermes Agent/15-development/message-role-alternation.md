---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Message Role Alternation

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

A strict rule: never two assistant or two user messages in a row. The conversation must alternate: user -> assistant -> user -> assistant.

## Concrete Example

Conversation: [user: Hello, assistant: Hi there, user: Help me, assistant: Sure...]. Each role alternates. Two user messages in a row would break the API. Hermes enforces this.

## Analogy

A tennis match - players alternate hitting the ball. If one player hits twice in a row, it is a fault. Message role alternation is the tennis rule for conversations.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[system-prompt|System Prompt]]
- [[conversation-history|Conversation History]]

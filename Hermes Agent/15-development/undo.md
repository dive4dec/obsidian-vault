---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Undo

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Remove the last exchange from the conversation. Command: /undo. The model forgets the last interaction.

## Concrete Example

You asked Hermes to delete a file. It did. You realize: wrong file! /undo. The deletion command and result are removed. But the file is already deleted (undo only affects conversation, not filesystem).

## Analogy

An eraser on a pencil - you erase the last thing you wrote. But if you used pen, the mark stays. /undo erases the conversation, but filesystem changes are like pen - they stay.

## Related Concepts

- [[safety-net|Safety Net]]
- [[conversation-history|Conversation History]]
- [[undo-limitations|Undo Limitations]]

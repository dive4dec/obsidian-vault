---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Input Sanitization

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Cleaning user input to remove potentially dangerous content before passing it to the model.

## 📋 Concrete Example

Strip HTML tags, remove special characters, limit length, scan for known injection patterns ('ignore previous', 'system prompt'). Clean input reduces injection risk.

## 🔗 Analogy

Washing vegetables before cooking - you remove dirt, bugs, and chemicals before eating. Input sanitization `washes` user input to remove anything dangerous before the model processes it.

## Related Concepts

- [[prompt-defense|Prompt Defense]]
- [[security|Security]]
- [[prompt-injection|Prompt Injection]]

---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Chat Template

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Different LLMs expect different formats for conversations (system/user/assistant turns). Chat templates structure the conversation correctly for each model.

## 📋 Concrete Example

ChatML format: <|im_start|>system\nYou are helpful<|im_end|>\n<|im_start|>user\nHi<|im_end|>. Each model has its own template. Using the wrong one confuses the model.

## 🔗 Analogy

Different schools have different uniform formats - one school requires blazers, another requires polo shirts. You must dress according to the school's template. Same content, different packaging.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[user-prompt|User Prompt]]
- [[conversation-format|Conversation Format]]
- [[chat-model|Chat Model]]
